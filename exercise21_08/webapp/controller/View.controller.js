sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sync6.exercise2108.controller.View", {
      onInit() {
        // 데이터 정의 - 라인 차트
        var oData = {
          salesData: [
            { month: "2023-01", sales: 12000 },
            { month: "2023-02", sales: 14000 },
            { month: "2023-03", sales: 15000 },
            { month: "2023-04", sales: 13000 },
            { month: "2023-05", sales: 16000 },
            { month: "2023-06", sales: 17000 },
          ],
        };

        // 데이터 정의 - 파이 차트
        var oDataPie = {
          pieData: [
            { category: "A등급", value: 50 },
            { category: "B등급", value: 65 },
            { category: "C등급", value: 75 },
            { category: "D등급", value: 40 },
          ],
        };

        //json 모델 정의 - 라인 파트
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel, "lineModel");

        //json 모델 정의 - 파이 차트
        var oPieModel = new JSONModel(oDataPie);
        this.getView().setModel(oPieModel, "pieModel");
      },
    });
  }
);
