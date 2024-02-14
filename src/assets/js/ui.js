var Header = {
  init: function () {
    this.aside();
  },
  aside: function () {
    $(document).ready(function () {
      $(".more-depth").click(function () {
        $(this).next(".dep2").slideToggle(200);
        $(this).toggleClass("active");
      });
    });
  },
};

var Common = {
  init: function () {
    this.select();
    this.common();
    this.datepickerRun();
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
  datepickerRun: function () {
    $("[data-picker='date']").datepicker({
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      showOtherMonths: false,
      //selectOtherMonths: true,
      showMonthAfterYear: true,
      yearSuffix: "년",
      dateFormat: "yy-mm-dd",
    });
    $("[month-data-picker='date']").datepicker({
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      showOtherMonths: false,
      //selectOtherMonths: true,
      showMonthAfterYear: true,
      yearSuffix: "년",
      dateFormat: "yy-mm",
    });
  },

  common: function () {

    // confirm 모달
    $(document).ready(function(){
      // 확인 버튼 클릭 시 다른 모달 표시
      $(".save-btn").click(function(){
        $('#alert-save-confirm').modal('hide'); // Confirm 모달 닫기
        $('#alert-save').modal('show');   // 다른 모달 표시
      });
    });

    // 메뉴관리 메뉴
    $('.menu-depth1 > li > div').click(function(){
      $(this).siblings('.menu-depth2').slideToggle('active');
      $(this).toggleClass('open');
    })
    $('.menu-depth2 > li > .dep2-desc').click(function(){
      $(this).siblings('.menu-depth3').slideToggle('active');
      $(this).toggleClass('open');
    })
    $('.menu-depth3 > li > .dep3-desc').click(function(){
      $(this).parent('li').addClass('active').siblings().removeClass('active');
      $('.tool-wrap').css('display','flex');
    })

    $('.form-check-input.authority').change(function(){
      // 체크박스가 체크되었는지 확인
      if($(this).is(":checked")){
        $('.role .list').show();
      } else {
        $('.role .list').hide();
      }
  });
  },
};

Header.init();
Common.init();
