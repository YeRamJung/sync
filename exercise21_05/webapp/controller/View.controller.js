sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sync.d21.exercise2105.controller.View", {
      onInit() {},

      onPress() {
        // 방법 1) id 통해서 가져오는 방법
        var sMsg = this.getView().byId("input").getValue();

        // 방법 2) 모델에 담긴 값을 통해 가져오는 방법
        //var sMsg = this.getView().getModel().getProperty("/input");

        if (!sMsg) {
          sMsg = "메세지를 입력 바랍니다.";
        }

        MessageToast.show(sMsg);
      },
    });
  }
);
