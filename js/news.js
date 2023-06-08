/*
window.addEventListener("load", function (event) {
  // 메뉴(a) 태그를 모은다
  const tabMenus = document.querySelectorAll(".news-tabmenu a");
  // 내용(div) 태그를 모은다
  const tabConts = document.querySelectorAll(".news-tabcon > div");
  // 메뉴(a) 태그 이벤트처리
  tabMenus.forEach((item, index) => {
    console.log(item);
    //클릭이벤트를 걸어준다
    item.addEventListener("click", function (e) {
      //현재 클릭한 것이 a태그라면 기본 이벤트 전달을 막아야함
      //이유 : a태그의 원래 용도가 href 주소이동이므로...
      console.log(e);
      e.preventDefault();
      //클릭이 된 메뉴의 순서값을 전달해서 클래스를 적용한다.
      //타이머의 보여줄 번호를 갱신한다
      tabNumber = index;
      changeTab(index);
    });
  });

  //인덱스를 전달받아서 화면갱신하는 용도
  function changeTab(_index) {
    //메뉴포커스 이동처리
    tabMenus.forEach((item, index) => {
      if (_index === index) {
        //포커스 표현
        item.classList.add("tab-menu-active");
      } else {
        //포커스 제거 표현
        item.classList.remove("tab-menu-active");
      }
    });

    //내용포커스 이동처리
    tabConts.forEach((item, index) => {
      if (_index === index) {
        //포커스 표현
        item.classList.add("tab-con-active");
      } else {
        //포커스 제거 표현
        item.classList.remove("tab-con-active");
      }
    });
  }
  // changeTab(0);
  //함수호출을 해서 원하는 탭 보여주기
  //타이머를 이용해서 순차적으로 탭 내용 보여주기
  let tabNumber = 0;
  let tabTimer = setInterval(function () {
    // 다음에 보여줄 값 1증가
    tabNumber = tabNumber + 1;
    if (tabNumber >= tabMenus.length) {
      tabNumber = 0;
    }
    changeTab(tabNumber);
  }, 1500);
  const newsWrap = document.querySelector(".news-wrap");
  newsWrap.addEventListener("mouseenter", function () {
    //타이머 없애기
    clearInterval(tabTimer);
  });
  newsWrap.addEventListener("mouseleave", function () {
    // 항상 타이머를 새로 만들기 전에 지우고
    clearInterval(tabTimer);
    // 타이머를 다시 만든다
    tabTimer = setInterval(function () {
      // 다음에 보여줄 값 1 증가
      tabNumber = tabNumber + 1;
      if (tabNumber >= tabMenus.length) {
        tabNumber = 0;
      }
      changeTab(tabNumber);
    }, 1000);
  });
});
*/
/*
// JQuery
$(document).ready(function () {
  //탭메뉴 만들어 보기
  // 메뉴(a) 태그를 모은다
  const tabMenus = $(".news-tabmenu a");
  // 내용(div) 태그를 모은다
  const tabConts = $(".news-tabcon > div");
  // 메뉴(a) 태그 이벤트처리
  $.each(tabMenus, (index, item) => {
    //클릭이벤트를 걸어준다
    $(item).click(function (e) {
      //현재 클릭한 것이 a태그라면 기본 이벤트 전달을 막아야함
      //이유 : a태그의 원래 용도가 href 주소이동이므로...
      e.preventDefault();
      //클릭이 된 메뉴의 순서값을 전달해서 클래스를 적용한다.
      //타이머의 보여줄 번호를 갱신한다
      tabNumber = index;
      changeTab(index);
    });
  });

  //인덱스를 전달받아서 화면갱신하는 용도
  function changeTab(_index) {
    //메뉴포커스 이동처리
    $.each(tabMenus, (index, item) => {
      if (_index === index) {
        //포커스 표현
        $(item).addClass("tab-menu-active");
      } else {
        //포커스 제거 표현
        $(item).removeClass("tab-menu-active");
      }
    });
    $.each(tabConts, (index, item) => {
      if (_index === index) {
        //포커스 표현
        $(item).addClass("tab-con-active");
      } else {
        //포커스 제거 표현
        $(item).removeClass("tab-con-active");
      }
    });
    // 함수호출을 통해서 원하는 탭 보여주기
    changeTab(tabNumber);
  }

  //함수호출을 해서 원하는 탭 보여주기
  //타이머를 이용해서 순차적으로 탭 내용 보여주기
  let tabNumber = 0;
  let tabTimer = setInterval(function () {
    // 다음에 보여줄 값 1증가
    tabNumber = tabNumber + 1;
    if (tabNumber >= tabMenus.length) {
      tabNumber = 0;
    }
    changeTab(tabNumber);
  }, 1500);

  const newsWrap = $(".news-wrap");
  newsWrap.mouseenter(function () {
    //타이머 없애기
    clearInterval(tabTimer);
  });
  newsWrap.mouseleave(function () {
    // 항상 타이머를 새로 만들기 전에 지우고
    clearInterval(tabTimer);
    // 타이머를 다시 만든다
    tabTimer = setInterval(function () {
      // 다음에 보여줄 값 1 증가
      tabNumber = tabNumber + 1;
      if (tabNumber >= tabMenus.length) {
        tabNumber = 0;
      }
      changeTab(tabNumber);
    }, 1000);
  });
});
*/

/*
window.addEventListener("load", function (event) {
  const swiper1 = new Swiper(".sw-tab-1", {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    // display none,일때 에러처리
    observer: true,
    observeParents: true,
  });

  const swiper2 = new Swiper(".sw-tab-2", {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  });

  const swiper3 = new Swiper(".sw-tab-3", {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  });

  const swArr = [swiper1, swiper2, swiper3];

  // 탭메뉴 만들어 보기
  // 메뉴(a) 태그를 모은다.
  const tabMenus = document.querySelectorAll(".news-tabmenu a ");
  // 내용(div) 태그를 모은다.
  const tabConts = document.querySelectorAll(".news-tabcon > div");
  // 메뉴(a) 태그 이벤트처리
  tabMenus.forEach((item, index) => {
    // 클릭이벤트 걸어준다.
    item.addEventListener("click", function (e) {
      // 현재 클릭된 것이 a 태그라면 반드시
      // 기본 이벤트 전달을 막아야 한다.
      // 이유는 a 태그의 원래 용도가 href 주소이동이므로..
      // console.log(e);
      e.preventDefault();
      changeTab(index);
    });
  });

  // 인덱스를 전달받아서 화면 갱신하는 용도
  function changeTab(_index) {
    // 메뉴 포커스 이동 처리
    tabMenus.forEach((item, index) => {
      if (_index === index) {
        // 포커스 표현
        item.classList.add("tab-menu-active");
      } else {
        // 포커스 제거 표현
        item.classList.remove("tab-menu-active");
      }
    });

    // 내용 포커스 이동 처리
    tabConts.forEach((item, index) => {
      if (_index === index) {
        // 포커스 표현
        item.classList.add("tab-con-active");
        // 해당하는 번호의 swiper슬라이드를 처음으로 돌려서 시작한다
        let nowSwiper = swArr[index];
        // 자동플레이 멈춤/시작
        // nowSwiper.autoplay.stop();
        // nowSwiper.autoplay.start();

        // loop가 적용된 Swiper 처음으로 보내기
        nowSwiper.slideToLoop(0);

        //만약 loop가 false라면?
        //nowSwiper.slideTo(0);
      } else {
        // 포커스 제거 표현
        item.classList.remove("tab-con-active");
      }
    });
  }

  // 함수호출을 통해서 원하는 탭 보여주기
  changeTab(0);
});
*/

//JQuery
$(document).ready(function () {
  // 슬라이드 코드
  // display:none 에러처리
  const swiper1 = new Swiper(".sw-tab-1", {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  });

  const swiper2 = new Swiper(".sw-tab-2", {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  });

  const swiper3 = new Swiper(".sw-tab-3", {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  });

  const swArr = [swiper1, swiper2, swiper3];

  // 탭메뉴 만들어 보기
  // 메뉴(a) 태그를 모은다.
  const tabMenus = $(".news-tabmenu a ");
  // 내용(div) 태그를 모은다.
  const tabConts = $(".news-tabcon > div");
  // 메뉴(a) 태그 이벤트처리
  $.each(tabMenus, (index, item) => {
    // 클릭이벤트 걸어준다.
    $(item).click(function (e) {
      // 현재 클릭된 것이 a 태그라면 반드시
      // 기본 이벤트 전달을 막아야 한다.
      // 이유는 a 태그의 원래 용도가 href 주소이동이므로..
      // console.log(e);
      e.preventDefault();
      changeTab(index);
    });
  });
  // 인덱스를 전달받아서 화면 갱신하는 용도
  function changeTab(_index) {
    // 메뉴 포커스 이동 처리
    $.each(tabMenus, (index, item) => {
      if (_index === index) {
        // 포커스 표현
        $(item).addClass("tab-menu-active");
      } else {
        // 포커스 제거 표현
        $(item).removeClass("tab-menu-active");
      }
    });

    // 내용 포커스 이동 처리
    $.each(tabConts, (index, item) => {
      if (_index === index) {
        // 포커스 표현
        $(item).addClass("tab-con-active");
        // 해당하는 번호의 swiper 슬라이들
        // 처음으로 돌려서 시작한다.
        let nowSwiper = swArr[index];
        // 자동플레이 정지
        //nowSwiper.autoplay.stop();
        //nowSwiper.autoplay.start();

        // loop 가 적용된 swiper 처음으로 보내기
        nowSwiper.slideToLoop(0);

        // 만약 loop: false
        //nowSwiper.slideTo(0);
      } else {
        // 포커스 제거 표현
        $(item).removeClass("tab-con-active");
      }
    });
  }

  // 함수호출을 통해서 원하는 탭 보여주기
  changeTab(0);
});
