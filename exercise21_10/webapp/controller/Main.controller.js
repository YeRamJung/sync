sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("sync6.exercise2110.controller.Main", {
    onInit() {
      this.oRouter = this.getOwnerComponent().getRouter(); // 컨트롤러에 유효한 객체
    },
    onGoDetail() {
      //input 필드에 들어온 값 찾기
      var sValue = this.getView().byId("input").getValue();

      this.oRouter.navTo(
        "RouteDetail",
        {
          key1: sValue,
          key2: "hello",
        },
        true
      );
    },
  });
});
