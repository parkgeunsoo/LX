var html = document.querySelector("html");
var body = document.querySelector("body");
let mm = gsap.matchMedia();

gsap.registerPlugin(ScrollTrigger);

var Init = {
  init: function () {
    this.windowSize();
    this.scrolling();
    window.addEventListener("mousewheel", this.scrolling);
    window.addEventListener("touchmove", this.scrolling);
  },
  scrolling: function (e) {
    var doc = document.documentElement;
    var w = window;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var checkScroll = function () {
      /*
       ** Find the direction of scroll
       ** 0 - initial, 1 - up, 2 - down
       */
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
      } else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
      }

      if (direction !== prevDirection) {
        scrollDirection(direction, curScroll);
      }

      prevScroll = curScroll;
    };

    var scrollDirection = function (direction, curScroll) {
      if (direction === 2) {
        html.classList.remove("scroll-up");
        html.classList.add("scroll-down");
        prevDirection = direction;
      } else if (direction === 1) {
        html.classList.remove("scroll-down");
        html.classList.add("scroll-up");
        prevDirection = direction;
      }
    };

    window.addEventListener("scroll", checkScroll);
  },
  windowSize: function () {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      let vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty("--vw", `${vw}px`);
    });
  },
};

var Header = {
  init: function () {
    this.snb();
    this.headerSearch();
  },
  snb: function () {
    $(".menu-btn").on("click", function () {
      $(".header-snb").toggleClass("show");
      $(".header-search").removeClass("show");
    });

    $(".header-snb .snb .title").on("click", function () {
      var $parentSnb = $(this).parent(".snb");

      if ($parentSnb.hasClass("active")) {
        $parentSnb.removeClass("active");
      } else {
        $(".snb").removeClass("active");
        $parentSnb.addClass("active");
      }
    });
  },
  headerSearch: function () {
    $(".search-menu").on("click", function () {
      $(".header-search").toggleClass("show");
      $(".header-snb").removeClass("show");
    });
    $(".icon-close").on("click", function () {
      $(".header-search").removeClass("show");
    });
  },
};

var Common = {
  init: function () {
    this.landing();
    this.select();
    this.password();
    this.common();
  },
  landing: function () {
    /* 홈페이지 들어왔을때 애니메이션 */
  },
  select: function () {
    // selectbox 커스텀
    $(".select-btn").click(function () {
      $(this).parent().toggleClass("show");
    });

    $(".select-wrap .optionitem").click(function () {
      var text = $(this).html();
      $(this).parent().siblings(".select-btn").find("span").html(text);
      $(this).parent().siblings(".select-btn").find("span").css("color", "#333");
      $(".select-wrap").removeClass("show");
    });
  },
  password: function () {
    // 눈표시 클릭 시 패스워드 보이기
    $(".view-pw").on("click", function () {
      $(".form-password").toggleClass("active");

      if ($(".form-password").hasClass("active") == true) {
        $(this).find(".icon-eyes").attr("class", "icon-eyes-out").parents(".form-password").find(".form-control").attr("type", "text");
        // i 클래스                // 텍스트 보이기 i 클래스
      } else {
        $(this).find(".icon-eyes-out").attr("class", "icon-eyes").parents(".form-password").find(".form-control").attr("type", "password");
      }
    });
  },
  common: function () {},
};

Init.init();
Header.init();
Common.init();
