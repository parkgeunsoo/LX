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
   
  },

  common: function () {
    // confirm 모달
    $(document).ready(function () {
      // 확인 버튼 클릭 시 다른 모달 표시
      $(".save-btn").click(function () {
        $("#alert-save-confirm").modal("hide"); // Confirm 모달 닫기
        $("#alert-save").modal("show"); // 다른 모달 표시
      });
      $("#daterange").daterangepicker();
    });

    // 메뉴관리 메뉴
    $(".menu-list span").click(function () {
      $(this).addClass("active");
      // 이외의 모든 span에서 active 클래스 제거
      $(".menu-list span").not(this).removeClass("active");
    });

    $(".menu-depth1 > li  .icon-plus").click(function () {
      $(this).closest("div").siblings(".menu-depth2").slideToggle("active");
      $(this).closest("div").toggleClass("open");
    });

    $(".menu-depth2 > li  .icon-plus").click(function () {
      $(this).closest("div").siblings(".menu-depth3").slideToggle("active");
      $(this).toggleClass("open");
    });

    $(".open-tool").click(function () {
      $(".tool-wrap").css("display", "flex");
    });
    $(document).ready(function () {
      $("#fileInput").on("change", function () {
        var selectedFiles = this.files;

        if (selectedFiles.length > 0) {
          $("#selectedFile").text(selectedFiles[0].name);
          $("#selectedFile").addClass("select");
        } else {
          $("#selectedFile").text("선택된 파일이 없습니다.");
        }
      });
      $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 200) {
          $(".top-btn").fadeIn(200);
        } else {
          $(".top-btn").fadeOut(200);
        }
      });

      $(".top-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
      });
    });
  },
};

Header.init();
Common.init();

// const incrementCount = document.getElementById("increment-count");
// const decrementCount = document.getElementById("decrement-count");

// const totalCount = document.getElementById("total-count");
// var count = 1;

// totalCount.innerHTML = count;

// const handleIncrement = () => {
//    count++;
//    totalCount.innerHTML = count;

//    if(count == 12){
//       count = 1;
//    }
// };

// const handleDecrement = () => {
//    count--;
//    totalCount.innerHTML = count;

//    if( count == 1){
//       count = 13;
//    }
// };

// incrementCount.addEventListener("click", handleIncrement);
// decrementCount.addEventListener("click", handleDecrement);
