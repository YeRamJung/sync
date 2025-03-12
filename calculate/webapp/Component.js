sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sync/d21/calculate/model/models",
    "sap/ui/model/json/JSONModel",
  ],
  (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("sync.d21.calculate.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        // 계산기 데이터 정의 - json 모델
        const oCalcModel = {
          firstNumber: "",
          secondNumber: "",
          operation: "pluse",
          result: "",
        };
        const calcModel = new JSONModel(oCalcModel);
        this.setModel(calcModel, "calcModel");

        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();
      },
    });
  }
);
