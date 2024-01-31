var Header = {
  init: function () {
    this.aside();
  },
  aside: function () {
    $(document).ready(function () {
      $(".dep1").click(function () {
        $(this).next(".dep2").slideToggle(300);
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
  },

  common: function () {
    // textarea 유동적으로 height값 증가
    $(document).ready(function () {
      $(".form-textarea").on("input", function () {
        autoResizeTextarea($(this));
      });
    });

    function autoResizeTextarea($textarea) {
      $textarea.css("height", "auto");
      $textarea.css("height", $textarea[0].scrollHeight + "px");
    }
  },
};

Header.init();
Common.init();
