sap.ui.define([
    "sap/ui/core/UIComponent",
    "sync/d21/exercise2106/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("sync.d21.exercise2106.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});