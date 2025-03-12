sap.ui.define([], () => {
  "use strict";

  return {
    statusText(sStatus) {
      const oResourceBundle = this.getOwnerComponent()
        .getModel("i18n")
        .getResourceBundle();
      switch (sStatus) {
        case "A":
          return oResourceBundle.getText("invoiceStatusA");
        case "B":
          return oResourceBundle.getText("invoiceStatusB");
        case "C":
          return oResourceBundle.getText("invoiceStatusC");
        default:
          return sStatus;
      }
    },
    shipperNameText(shipperName) {
      const oView = this.getView().byId("searchField").getValue();
      switch (shipperName) {
        case "ACME":
          return "첫번째 shipper";
        case "Fun Inc.":
          return oView;
      }
    },
  };
});
