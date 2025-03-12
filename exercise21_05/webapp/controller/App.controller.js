sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sync.d21.exercise2105.controller.App", {
      onInit() {},

      // onPress() {
      //   var sMsg = this.getView().getModel().getProperty("/input");

      //   if (!sMsg) {
      //     sMsg = "메세지를 입력 바랍니다.";
      //   }

      //   MessageToast.show(sMsg);
      // },
    });
  }
);
