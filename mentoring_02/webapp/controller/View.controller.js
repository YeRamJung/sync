sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("sync6.mentoring02.controller.View", {
      onInit() {},

      // 다이얼로그 오픈 시
      async onOpenDialog(oEvent) {
        // var oModel = this.getView().getModel("employeeModel"); // JSON 모델 가져오기

        // //** 지피티 추천 코드
        // var aEmployees = oModel.getProperty("/Employees"); // 전체 직원 리스트 가져오기

        // var sClickedName = oEvent.getSource().getTitle(); // 클릭한 리스트 아이템의 이름 가져오기

        // // JSON 데이터에서 해당 이름과 일치하는 직원 정보 찾기
        // var oSelectedData = aEmployees.find((emp) => emp.Name === sClickedName);

        // if (!oSelectedData) {
        //   sap.m.MessageToast.show("해당 직원 정보를 찾을 수 없습니다.");
        //   return;
        // }

        //** 수업시간 코드 활용
        var oList = this.getView().byId("list");

        //view.xml 쪽 list의 property로 mode="SingleSelectMaster"로 해줘야지만 getSelectedItem()가 먹음(None으로 하면 안됨)
        var selectedItem = oList.getSelectedItem();

        var oSelectedData = selectedItem
          .getBindingContext("employeeModel")
          .getObject();

        console.log(oSelectedData);

        //비동기적으로 다이얼로그 load
        this.oDialog ??= await this.loadFragment({
          name: "sync6.mentoring02.view.Info",
        });

        // 다이얼로그에 뿌릴 데이터 생성하기 - 1명 사원의 정보
        var details = {
          Name: oSelectedData.Name,
          Position: oSelectedData.Position,
          Department: oSelectedData.Department,
          Status: oSelectedData.Status,
          Email: oSelectedData.Email,
          Phone: oSelectedData.Phone,
          Location: oSelectedData.Location,
          Salary: oSelectedData.Salary,
        };

        // 다이얼로그에만 뿌리는 데이터 모델 = 선택된 행의 데이터 모델
        var dialogModel = new JSONModel(details);
        this.oDialog.setModel(dialogModel, "selectedEmployee");
        this.oDialog.open();
      },
      onCloseDialog() {
        this.byId("dialog").close();
      },
    });
  }
);
