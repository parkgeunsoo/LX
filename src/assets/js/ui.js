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
    // 일반 달력 Datepicker 설정
    $("[data-picker='date']").datepicker({
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      showOtherMonths: false,
      showMonthAfterYear: true,
      yearSuffix: "년",
      dateFormat: "yy-mm-dd",
    });

    const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

    $("#monthpicker").datepicker({
      dateFormat: "yy-mm", // 날짜 형식을 연-월로 설정
      changeMonth: false, // 월 변경 비활성화
      changeYear: true,
      showButtonPanel: true, // 버튼 패널 표시
      yearRange: "c-10:c+10", // 연도 범위 설정
      beforeShow: function (input, inst) {
        setTimeout(function () {
          const widget = $(inst.dpDiv);
          widget.find(".ui-datepicker-calendar").hide();
          widget.find(".ui-datepicker-title").css("text-align", "center");
          if (!inst.selectedYear) {
            inst.selectedYear = new Date().getFullYear();
          }
          if (!inst.selectedMonth && inst.selectedMonth !== 0) {
            inst.selectedMonth = new Date().getMonth();
          }
          widget.find(".ui-datepicker-title").html(inst.selectedYear);
          if (widget.find(".month-picker").length === 0) {
            widget.find(".ui-datepicker-header").after(buildMonthPicker(inst));
          }
          addYearNavigationHandlers(inst);
        }, 1);
      },
      onChangeMonthYear: function (year, month, inst) {
        setTimeout(function () {
          const widget = $(inst.dpDiv);
          widget.find(".ui-datepicker-calendar").hide();
          widget.find(".ui-datepicker-title").css("text-align", "center");
          widget.find(".ui-datepicker-title").html(year);
          inst.selectedYear = year; // 선택한 연도 업데이트
          buildMonthPicker(inst); // 월 선택기를 다시 빌드
          addYearNavigationHandlers(inst); // 연도 변경 화살표 핸들러 추가
        }, 1);
      },
      onClose: function (dateText, inst) {
        const widget = $(inst.dpDiv);
        widget.find(".month-picker div").removeClass("selected");
      },
    });

    function buildMonthPicker(inst) {
      const monthPicker = $('<div class="month-picker"></div>');
      const selectedYear = inst.selectedYear || new Date().getFullYear();
      const selectedMonth = inst.selectedMonth || new Date().getMonth(); // 초기 값 설정
      monthNames.forEach((month, index) => {
        const isSelected = index === selectedMonth;
        const monthDiv = $(`<div data-month="${index}" class="${isSelected ? "selected" : ""}">${month}</div>`);
        monthDiv.on("click", function () {
          const selectedMonth = $(this).data("month");
          inst.selectedMonth = selectedMonth; // 선택한 월 업데이트
          $("#monthpicker").datepicker("setDate", new Date(selectedYear, selectedMonth, 1));
          $("#monthpicker").val(`${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}`);
          $(".month-picker div").removeClass("selected");
          $(this).addClass("selected");
          inst.dpDiv.hide();
        });
        monthPicker.append(monthDiv);
      });
      $(".month-picker").remove(); // 이전 월 선택기를 제거
      inst.dpDiv.find(".ui-datepicker-header").after(monthPicker); // 새로운 월 선택기를 추가
      return monthPicker;
    }

    function addYearNavigationHandlers(inst) {
      const widget = $(inst.dpDiv);
      widget
        .find(".ui-datepicker-next")
        .off("click")
        .on("click", function () {
          const year = inst.selectedYear + 1;
          inst.selectedYear = year;
          $("#monthpicker").datepicker("setDate", new Date(year, inst.selectedMonth, 1));
          $("#monthpicker").datepicker("refresh");
        });
      widget
        .find(".ui-datepicker-prev")
        .off("click")
        .on("click", function () {
          const year = inst.selectedYear - 1;
          inst.selectedYear = year;
          $("#monthpicker").datepicker("setDate", new Date(year, inst.selectedMonth, 1));
          $("#monthpicker").datepicker("refresh");
        });
    }
  },

  common: function () {
    // confirm 모달
    $(document).ready(function () {
      // 확인 버튼 클릭 시 다른 모달 표시
      $(".save-btn").click(function () {
        $("#alert-save-confirm").modal("hide"); // Confirm 모달 닫기
        $("#alert-save").modal("show"); // 다른 모달 표시
      });
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
