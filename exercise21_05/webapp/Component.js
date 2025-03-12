sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sync/d21/exercise2105/model/models",
  ],
  (UIComponent, JSONModel, models) => {
    "use strict";

    return UIComponent.extend("sync.d21.exercise2105.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        const oModel = new JSONModel({ input: "" });

        this.setModel(oModel);

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();
      },
    });
  }
);
