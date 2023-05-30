/**
 * 작업자 : 최혜미
 * 작업일 : 2023-05-25
 * 작업내역: 배너작업
 */
// event.currentTarget : 누가 발생시켰는지
// event.target : 누가 이벤트를 처리(핸들링)하는가
// "load" : 이벤트 타입(종류) : html뿐만 아니라 리소스가 모두 로드 완료 되었을때 실행
// "contentsLoaded.." : DOM(html)로드 완료 시 실행
// 콜백함수 : 이벤트 핸들러
// 매개변수 : event 는 이벤트 객체가 암묵적으로 전달해 주는 인자(argument)다.

//<div onclick = ""  : 어트리뷰트 방식
// window.onclick= : 프로퍼티 방식 (중복사용 불가, 덮어씌워짐.)
// window.addEventListener ("click") : 메서드 방식 (중복사용 가능)
window.addEventListener("load", function (event) {
  const swBanner = new Swiper(".sw-banner", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-banner-pg",
      clickable: true,
    },
    navigation: {
      prevEl: ".sw-banner-prev",
      nextEl: ".sw-banner-next",
    },
  });
  //getElementById  : 아이디 선택하기
  //querySelector : 한개 선택
  //querySelectorAll : 여러개 선택
});

//////////////////////////////////////////////js방식
//이미지, 폰트 등 모든 리소스 로딩 완료시 이벤트 객체를 전달하면서 핸들러 함수 실행
window.addEventListener("load", function (event) {
  fetch("data/bannerdata.json")
    .then((res) => res.json())
    .then((result) => {
      let html = "";
      //forEach는 고차함수다. 함수를 전달받는 함수이기 때문에. 안에 함수만 불러올수있음
      result["banner-list"].forEach((item, index, arr) => {
        let temp = `
        <div class="swiper-slide"><a href="${item.link}"> ${item.title} </a></div>
        `;
        html += temp;
      });
      //바닐라 js
      document.querySelector(".sw-banner .swiper-wrapper").innerHTML = html;

      //jQuery
      // $(".sw-banner .swiper-wrapper").html(html);
    })
    .catch((err) => console.log(err));

  let bannerSlide = document.querySelector(".banner-slide");
  let bannerBt = document.querySelector(".banner-bt");

  //   //html 태그가 실제로 적용되는 px높이 알아내기
  //   let bannerHeight = bannerSlide.scrollHeight;
  //   bannerSlide.style.height = bannerHeight + "px";

  //배너가 오픈된 상태를 기록한다(사용자가 정의한 변수임.)
  let bannerOpenState = true;

  bannerBt.onclick = function () {
    //     // 1. 동적 클래스 추가방식(add와 remove)
    //     // bannerSlide.classList.add("active");
    //     // bannerSlide.classList.remove("active");
    //     // 2. 동적 클래스 토글 : toggle은 있으면 remove, 없으면 add하는 애임
    //     // bt에 z-index를 줘야함 아니면 뒤로 밀려서 안눌림
    //     bannerSlide.classList.toggle("active");
    //     // 3. 클래스 존재여부(active클래스 포함하고있니?없니?)
    //     // bannerSlide.classList.contain("active");
    //     // 4. css 변경방식
    //     // bannerSlide.style.height = "0px";
    // if (bannerOpenState === true) {
    //   //anime.js으로 모션
    //   anime({
    //     targets: bannerSlide,
    //     height: 0,
    //     duration: 1000,
    //     easing: "easeInOutExpo",
    //   });
    //   bannerOpenState = false;
    // } else {
    //   anime({
    //     targets: bannerSlide,
    //     height: 90,
    //     duration: 1000,
    //     easing: "easeInOutExpo",
    //   });
    //   bannerOpenState = true;
    // }
  };
});

///////////////////////////////////////////////////////////Jquery방식
//DOM(html)완성이 되면. 함수실행. jquery = $ : 인자를 찾아라~
//DOM만 완성되면 로드 되므로 실행속도가 빠름.
$(document).ready(function () {
  let bannerSlide = $(".banner-slide");
  let bannerBt = $(".banner-bt");
  let bannerOpenState = true;
  bannerBt.click(function () {
    // 1. css 직접번경
    // bannerSlide.css("height", 0);
    // 2. 클래스 추가하기
    // bannerSlide.addClass("active");
    // 3. 클래스 제거하기
    // bannerSlide.removeClass("active");
    // 4. 클래스 동적 토글
    // bannerSlide.toggleClass("active");
    // 5. 클래스 동적 적용 파악(그 클래스 있니 없니?)
    // bannerSlide.hasClass("active");
    // css transition없이 활용 가능.(하지만 애니메이션이 좀 거칠다.)
    // bannerSlide.slideUp();
    // bannerSlide.slidedown();
    $(".banner-slide").stop().slideToggle();
    bannerBt.toggleClass("active");

    // const targetHeight = bannerOpenState ? 0 : 90;
    // anime({
    //   targets: ".banner-slide",
    //   height: targetHeight,
    //   duration: 1000,
    //   easing: "easeInOutExpo",
    // });
  });
});

//anime.js 사용법
// 인터렉션 모션은 1순위로 css의 transition
// 2순위 JS라이브러리는 GSAP https://greensock.com/gsap
// 3순위 JS라이브러리는 anime.js https://animejs.com
// 4순위 AOS 라이브러리 (but 제어하기가 까다롭다) https://michalsnik.github.io/aos/
// 마지막 후순위로 js의 jQuery 활용(모션이 부자연스럽다, jQuery를 안쓰는 추세이기도 하고)
