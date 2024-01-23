var Header = {
  init: function () {
    this.aside();
  },
  aside: function () {
    $(document).ready(function(){
      $('.dep1').click(function(){
        $(this).next('.dep2').slideToggle();
        $(this).toggleClass('active');
      });
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

Header.init();
Common.init();
