sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sync.d21.calculate.controller.Calc", {
      onInit() {},

      //사칙연산하는 이벤트
      onCalculate() {
        var oView = this.getView().getModel("calcModel");
        var sOperation = oView.byId("select").getSelectedKey(); // 사칙연산 드롭다운 전체를 감싸는 Select 태그의 selectedKey 값
        var iFirstNumber = parseFloat(oView.byId("input_first").getValue()); // 입력필드에 받은 첫번째 값 형변환해서 받기
        var iSecondNumber = parseFloat(oView.byId("input_second").getValue()); // 입력필드에 받은 두번째 값 형변환해서 받기
        var iResult;

        // 연산 수행
        switch (sOperation) {
          case "pluse":
            iResult = iFirstNumber + iSecondNumber;
            break;
          case "minus":
            iResult = iFirstNumber - iSecondNumber;
            break;
          case "multi":
            iResult = iFirstNumber * iSecondNumber;
            break;
          case "division":
            iResult = iFirstNumber / iSecondNumber;
            break;
          default:
            iResult = "연산을 선택하세요";
        }

        // 정상 수행을 이렇게 확인하는 게 맞을까?
        if (iResult != null && iResult != undefined) {
          // 결과 뿌려주는 text의 내용을 iResult로 셋팅하기
          oView.byId("text_result").setText(iResult);

          //메시지 토스트
          MessageToast.show("계산 완료!");
        }
      },

      //구구단 구하는 이벤트
      // onGugudan() {
      //   var oView = this.getView();
      //   var iGugudan = parseFloat(oView.byId("input_first").getValue()); // 입력필드 첫번째 숫자 받아오기
      // },
    });
  }
);
