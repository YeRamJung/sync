sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, ODataModel, JSONModel) => {
    "use strict";

    return Controller.extend("sync6.exercise2109.controller.View", {
      onInit() {
        // odata model 객체 생성
        var oModel = new ODataModel("/v2/northwind/northwind.svc/");
        // this.getView().setModel(oDataModel, "oModel");

        // var oDataModel = this.getView().getModel("oModel");

        //✅ odata 데이터를 json으로 변환하여 차트 모델로 적용
        oModel.read("/Products", {
          //성공 시
          success: function (oData) {
            // ✅ odata 응답을 json모델에 저장
            var oChartModel = new JSONModel({ data: oData.results });
            console.log(oData.results);

            //상위 5개만 뽑기 위해 먼저 내림차순 정렬
            oData.results.sort((a, b) => a.UnitInStock - b.UnitInStock);

            //상위 5개만 가져오기
            oData.splice(5);

            // ✅ json모델을 차트와 연결
            this.getView().setModel(oChartModel, "chartModel");
          }.bind(this),

          // 실패 시
          error: function (oError) {
            console.error("ODataModel 읽기 실패", oError);
          },
        });
      },
    });
  }
);
