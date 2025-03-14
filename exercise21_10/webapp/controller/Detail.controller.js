sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sync6.exercise2110.controller.Detail", {
      onInit() {
        this.oRouter = this.getOwnerComponent().getRouter(); // 컨트롤러에 유효한 객체

        //데이터 뽑아오기
        this.oRouter
          .getRoute("RouteDetail")
          .attachPatternMatched(this.onPatternMatched, this);
      },

      // manifest에 정의해둔 pattern이 일치할 때마다 실행되는 이벤트
      onPatternMatched(oEvent) {
        // 초기화, 셋팅, 매개변수 찾기 - 데이터 뽑아오기
        // manifest에 정의해둔 라우터를 가져오고, 그 라우터에 정의된 파라미터 인자들 가져오기 & 전달할 값들 구분하기

        //1. URL 에서 전달된 파라미터 가져오기.
        // var sId = oEvent.getParameter("arguments").key1; //키 지정
        var oArgu = oEvent.getParameters().arguments; //배열
        // this.oArgu = oEvent.getParameters().arguments;

        // console.log(oArgu);

        //2. 새로운 JSON 모델 생성하여 ID 값을 저장
        // var oModel = new JSONModel({ key1: sId });
        var oModel = new JSONModel(oArgu);

        //3. 뷰에 "detailModel"로 모델 설정
        this.getView().setModel(oModel, "detailModel");
      },

      //메인 화면으로 돌아가는 함수
      onGoBack() {
        this.oRouter.navTo("RouteMain", {}, true);
      },
    });
  }
);

// {
//   "?query": {
//     no: this.oArgu.no,
//     name: this.oArgu.name,
//     gender: this.oArgu.gender,
//     birthdate: this.oArgu.birthdate,
//   },
// }
