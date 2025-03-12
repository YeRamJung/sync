sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    //  "sap/ui/model/resource/ResourceModel",
  ],
  (UIComponent, JSONModel) => {
    // ResourceModel
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },

      init() {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        const oData = {
          recipient: {
            name: "World",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        // manifest.json에서 언어팩을 인지하기 때문에 더 이상 여기서 resourcemodel 만들 필요없음!
        //  // set i18n model
        //  const i18nModel = new ResourceModel({
        //    bundleName: "ui5.walkthrough.i18n.i18n",
        //  });
        //  this.setModel(i18nModel, "i18n");
      },
    });
  }
);
