sap.ui.define([], () => {
  "use strict";

  return {
    //아이콘 적용하는 함수
    iconType(type) {
      switch (type) {
        case "과일":
          return "sap-icon://nutrition-activity";
        case "전자제품":
          return "sap-icon://product";
      }
    },

    // 금액에 따라 싸다, 적당하다, 비싸다 출력하는 함수
    priceAmount(price) {
      const oResourceBundle = this.getOwnerComponent()
        .getModel("i18n")
        .getResourceBundle();

      if (price < 5000) {
        return oResourceBundle.getText("priceLow");
      } else if (price < 20000) {
        // 5000 <= price && price < 20000
        return oResourceBundle.getText("priceMedium");
      } else {
        return oResourceBundle.getText("priceHigh");
      }
    },
  };
});
