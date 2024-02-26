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

    var currentYear = new Date().getFullYear();
    var startYear = currentYear - 10;
    var options = {
      startYear: startYear,
      finalYear: currentYear,
      pattern: "yyyy-mm",
      monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    };
    $("#schMonth").monthpicker(options);
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
    $(".menu-depth1 > li > div").click(function () {
      $(this).siblings(".menu-depth2").slideToggle("active");
      $(this).toggleClass("open");
    });
    $(".menu-depth2 > li > .dep2-desc").click(function () {
      $(this).siblings(".menu-depth3").slideToggle("active");
      $(this).toggleClass("open");
    });
    $(".open-tool").click(function () {
      $(this).parent("li").addClass("active").siblings().removeClass("active");
      $(".tool-wrap").css("display", "flex");
    });

    $(".form-check-input.authority").change(function () {
      // 체크박스가 체크되었는지 확인
      if ($(this).is(":checked")) {
        $(".role .role-sub-wrap").show();
      } else {
        $(".role .role-sub-wrap").hide();
      }
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
    });
    let currentProgress = 0;
    const targetProgress = 100;
    const increment = 1; // 증가할 값 (1%)

    function updateProgressBar() {
      const progressBar = document.querySelector(".progress");
      const progressText = document.querySelector(".progress-text");

      if (currentProgress < targetProgress) {
        currentProgress += increment;
        progressBar.style.width = currentProgress + "%";
        progressText.textContent = Math.floor(currentProgress) + "%";
        requestAnimationFrame(updateProgressBar);
      }
    }

    // 초기 호출
    requestAnimationFrame(updateProgressBar);

    const image = document.querySelector('.loading-image');

    function rotateImage() {
      image.style.transform = `rotate(${currentAngle}deg)`;
      currentAngle += 1; // 회전 각도 증가
      if (currentAngle >= 360) {
        currentAngle = 0;
      }
      requestAnimationFrame(rotateImage);
    }
    rotateImage();
  },
};

Header.init();
Common.init();
