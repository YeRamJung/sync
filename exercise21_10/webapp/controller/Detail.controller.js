sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("sync6.exercise2110.controller.Detail", {
    onInit() {
      this.oRouter = this.getOwnerComponent().getRouter(); // 컨트롤러에 유효한 객체
    },

    //이전 화면으로 돌아가는 함수
    onGoBack() {
      this.oRouter.navTo(
        "RouteMain",
        {
          "?query": {
            keyA: "ToMain",
            keyB: "abc",
            keyC: "haha",
          },
        },
        true
      );
    },
  });
});
