window.addEventListener("load", function (event) {
  // fetch로 연결하기
  // fetch("data/newsroomdata.json")
  //   .then((res) => res.json())
  //   .then((result) => console.log(result))
  //   .catch((err) => console.log(err));

  // async, await 사용해서 연결하기
  // async는 함수앞에만 붙을 수 있다.(모든형식의 함수 앞에 다 가능함)
  const getNewsRoom = async function () {
    try {
      // fetch를 이용해서 서버에서 데이터 가져옴
      let response = await fetch("data/newsroomdata.json");
      let result = await response.json();
      parseYuHtml(result);
    } catch (err) {
      console.log(err);
    }
  };

  const parseYuHtml = (data) => {
    let allTag = ``;

    //data의 newsroom를 뜯어서 배열에 담는다
    let list = [...data.newsroom];
    list.forEach((item)=>{
      let temp= `
      <a href="${item.link}" target="${item.targetk}" class="newsroom-box">
      <div class="newsroom-img"><img src="../images/${item.photo}"></div>
      <div class="newsroom-info">
        <p>${item.title}</p>
        <span>${item.date}</span>
      </div>
    </a>
      `;

      allTag += temp;

    });
    const positionTag = document.querySelector(".newsroom-wrap");
    positionTag.innerHTML = allTag;

  };

  getNewsRoom();
});
