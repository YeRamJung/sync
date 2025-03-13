sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sync.d21.calculate.controller.Calc", {
      onInit() {},

      //사칙연산하는 함수
      onCalculate() {
        //json 모델 가져오기
        var oModel = this.getView().getModel("calcModel");

        // 내가 한 방식
        // 사칙연산 드롭다운 전체를 감싸는 Select 태그의 selectedKey 값
        var sOperation = this.getView().byId("select").getSelectedKey();

        // 입력필드에 받은 첫번째 값 형변환해서 받기
        var iFirstNumber = parseFloat(
          this.getView().byId("input_first").getValue()
        );

        // 입력필드에 받은 두번째 값 형변환해서 받기
        var iSecondNumber = parseFloat(
          this.getView().byId("input_second").getValue()
        );

        // 결과값 받을 변수
        var iResult;

        // 첫번째 값 또는 두번째 값 NaN이면 메세지 토스트 출력
        if (isNaN(iFirstNumber) || isNaN(iSecondNumber)) {
          MessageToast.show("숫자를 입력하세요");
          return;
        }

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
            // 나누는 수가 0인 경우
            if (iSecondNumber == 0) {
              MessageToast.show("0으로 나눌 수 없습니다.");
              return;
            }
            iResult = iFirstNumber / iSecondNumber;
            break;
          default:
            iResult = "연산을 선택하세요";
            return;
        }

        // 정상 수행을 이렇게 확인하는 게 맞을까?
        if (iResult != null && iResult != undefined && iResult != NaN) {
          // 결과 뿌려주는 text의 내용을 iResult로 셋팅하기
          // var result = oModel.setProperty("/result", iResult.toString());
          // this.getView().byId("text_result").setText(result);

          this.getView().byId("text_result").setText(iResult);

          //메시지 토스트
          MessageToast.show("계산 완료!");

          //모델 초기화 - 다음 연산을 위해
          oModel.setProperty("/firstNumber", "");
          oModel.setProperty("/secondNumber", "");
          oModel.setProperty("/operation", "pluse");
          oModel.setProperty("/result", "");

          // 다른 연산 할 수 있도록 모델 refresh
          oModel.refresh();
        }
        //연산 실패한 경우
        else {
          MessageToast.show("계산 실패!");
        }
      },

      //구구단 구하는 함수
      async onGugudan() {
        // var oModel = this.getView().getModel();

        // 입력필드 첫번째 숫자 받아오기 - 구구단의 단이 될 것
        var iGugudan = parseFloat(
          othis.getView().byId("input_first").getValue()
        );

        if (isNaN(iGugudan)) {
          MessageToast.show("구구단을 표시할 숫자를 입력해주세요");
        }

        // 구구단 9단까지의 결과 담는 변수
        var sMultiplicationTable = iGugudan + "단\n\n";

        //구구단 생성
        for (var i = 0; i < 9; i++) {
          sMultiplicationTable +=
            iGugudan + " x " + i + " = " + iGugudan * i + "\n";
        }

        // 다이얼로그 load
        this.oDialog ??= await this.loadFragment({
          name: "sync.d21.calculate.view.Gugudan",
        });

        this.oDialog.open();
      },

      // 다이얼로그 닫는 함수
      onCloseDialog() {
        this.byId("dialog").close(); // 다이얼로그의 id
      },
    });
  }
);
