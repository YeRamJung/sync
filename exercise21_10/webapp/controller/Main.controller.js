sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sync6.exercise2110.controller.Main", {
      // 컨트롤러가 load될 때, 한번만 실행 - 모델을 생성함
      onInit() {
        //한 단계 위에 있는 Component에 접근해서 라우터를 가져옴
        this.oRouter = this.getOwnerComponent().getRouter(); // 컨트롤러에 유효한 객체
      },

      //버튼 클릭 시, 값 전달
      onGoDetail() {
        //input 필드에 들어온 값 찾기
        // var sValue = this.getView().byId("input").getValue();
        // this.oRouter.navTo(
        //   "RouteDetail",
        //   {
        //     key1: sValue,
        //     key2: "hello",
        //   },
        //   true
        // );

        // 테이블 가져오기
        var oTable = this.getView().byId("studentTable");

        var oSelectItem = oTable.getSelectedItem();

        //선택된 행이 없는 경우
        if (!oSelectItem) {
          MessageToast.show("학생 정보를 선택하세요");
          return;
        }

        var oData = oSelectItem.getBindingContext("studentModel").getObject();
        console.log(oData);

        //선택된 학생의 no(아이디)를 Detail.view 쪽으로 라우팅
        this.oRouter.navTo(
          "RouteDetail",
          {
            no: oData.no,
            name: oData.name,
            gender: oData.gender,
            birthdate: oData.birthdate,
          },
          true
        );
      },
    });
  }
);
