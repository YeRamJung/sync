sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
  ], // ODataModel 모듈 추가하기
  (Controller, ODataModel, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("sync6.exercise2107.controller.View", {
      onInit() {
        // odata 모델 생성 및 설정
        var oModel = new ODataModel("/sap/opu/odata/sap/ZCARR_D21_SRV/"); // 이 경로는 manifest.json에서 찾을 수 있음 - dataSources

        //view에 모델 생성
        this.getView().setModel(oModel, "oModel");
      },

      // 데이터 생성하기 - Create 버튼 클릭 시 호출
      onCreate() {
        // 현재 뷰에 정의된 모델 가져와서 모델 객체 변수 정의하기
        var oModel = this.getView().getModel("oModel");

        // 해당 모델의 각 input 값 가져오기
        var carridValue = this.getView().byId("carridInput").getValue(); // carrid 입력받은 값 가져오기
        var carrnameValue = this.getView().byId("carrnameInput").getValue(); // carrname 입력받은 값 가져오기
        var currcodeValue = this.getView().byId("currcodeInput").getValue(); // urrcode 입력받은 값 가져오기
        var urlValue = this.getView().byId("urlInput").getValue(); // url 입력받은 값 가져오기

        // 입력필드 하나라도 값을 넣지 않은 채 버튼을 클릭했다면, 더 진행 안되게끔 막기
        if (!carridValue || !carrnameValue || !currcodeValue || !urlValue) {
          var carridId = this.getView().byId("carridInput");
          carridId.setValueState("Error");
          carridId.setValueStateText("필수 입력값입니다.");

          var carrnameId = this.getView().byId("carrnameInput");
          carrnameId.setValueState("Error");
          carrnameId.setValueStateText("필수 입력값입니다.");

          var currcodeId = this.getView().byId("currcodeInput");
          currcodeId.setValueState("Error");
          currcodeId.setValueStateText("필수 입력값입니다.");

          var urlId = this.getView().byId("urlInput");
          urlId.setValueState("Error");
          urlId.setValueStateText("필수 입력값입니다.");

          return;
        }

        //!!! 중복값 체크 - 기존 디비테이블에 carrid 중복값 있는 경우 에러메시지 띄우기
        // var oTable = this.getView().byId("mTable");
        // var carridPath = oTable.getBindingContext("oModel").getPath();

        oModel.read("/ZCARR_D21Set", {
          urlParameters: { $select: "Carrid" },
          success() {},
          error() {},
        });

        // 가져온 input 값들을 post 방식으로 전달할 객체 생성
        var oNewEntry = {
          Carrid: carridValue,
          Carrname: carrnameValue,
          Currcode: currcodeValue,
          Url: urlValue,
        };

        // i18n 모델 객체 생성
        var oResourceBundle = this.getView()
          .getModel("i18n")
          .getResourceBundle();

        //ODataModel을 사용해 post 요청으로 전달하기
        oModel.create("/ZCARR_D21Set", oNewEntry, {
          success() {
            MessageToast.show(oResourceBundle.getText("successCreateMessage"));
            oModel.refresh();
          },
          error() {
            MessageToast.show(oResourceBundle.getText("errorCreateMessage"));
          },
        });
      },

      // 데이터 삭제하기 - Delete 버튼 클릭 시 호출
      onDelete() {
        // 현재 뷰에 정의된 데이터모델에 적용된 테이블 객체 가져오기
        var oTable = this.getView().byId("mTable");

        // 현재 뷰에 정의된 데이터 모델 객체 생성
        var oModel = this.getView().getModel("oModel");

        // i18n 모델 객체 생성
        var oResourceBundle = this.getView()
          .getModel("i18n")
          .getResourceBundle();

        // 삭제하려고 선택된 아이템 가져오기
        var deleteItem = oTable.getSelectedItem();

        // 선택된 데이터 없을 경우 메시지토스트 출력
        if (!deleteItem) {
          MessageToast.show(
            oResourceBundle.getText("deleteNotSelectedMessage")
          );
          return; // 함수 종료
        }

        // 선택된 아이템 객체에서 바인딩된 내용물 가져오기
        var oContext = deleteItem.getBindingContext("oModel");
        if (!oContext) {
          MessageToast.show("바인딩 실패"); //oResourceBundle.getText()
          return; // 함수 종료
        }

        // 삭제할 항목의 oData 경로 가져오기
        var deletePath = oContext.getPath();

        oModel.remove(deletePath, {
          success() {
            MessageToast.show(oResourceBundle.getText("successDeleteMessage"));

            oTable.removeSelections(); // 선택해제
          },
          error() {
            MessageToast.show(oResourceBundle.getText("errorDeleteMessage"));
          },
        });
      },

      // 데이터 업데이트 진행 - update 버튼 클릭 시 호출
      async onUpdate() {
        // 현재 뷰에 정의된 데이터모델에 적용된 테이블 객체 가져오기
        var oTable = this.getView().byId("mTable");

        // i18n 모델 객체 생성
        var oResourceBundle = this.getView()
          .getModel("i18n")
          .getResourceBundle();

        // 업데이트하려고 선택된 아이템 가져오기
        var updateItem = oTable.getSelectedItem();

        // 선택이 안된 경우 - 메세지 출력
        if (!updateItem) {
          MessageToast.show(
            oResourceBundle.getText("updateNotSelectedMessage")
          );
          return;
        }

        //옳게 선택된 경우 - 바인딩된 context 가져오기
        var oData = updateItem.getBindingContext("oModel").getObject();

        // update를 위한 json 모델 생성 : 선택한 데이터 객체를 json모델에 전달
        var oUpdateModel = new JSONModel(oData);

        // fragment가 없는 경우만 생성하기
        this.oDialog ??= await this.loadFragment({
          name: "sync6.exercise2107.view.Update",
        });

        //다이얼로그에 JSON 모델 값 넘겨주기
        this.oDialog.setModel(oUpdateModel, "updateModel");

        // 완료 시 다이얼로그 오픈
        this.oDialog.open();
      },

      // 업데이트 진행하기 - 다이얼로그 내 update 버튼 클릭 시 호출
      onUpdateDialog() {
        // i18n 모델 객체 생성
        var oResourceBundle = this.getView()
          .getModel("i18n")
          .getResourceBundle();

        var oModel = this.getView().getModel("oModel"); // odata 모델 가져오기

        var oTable = this.getView().byId("mTable");
        var updateItem = oTable.getSelectedItem();
        var context = updateItem.getBindingContext("oModel");
        var oData = context.getObject();
        var updatePath = context.getPath();

        var carrnameInput = this.getView()
          .byId("carrnameInputDialog")
          .getValue();
        var urlInput = this.getView().byId("urlInputDialog").getValue();

        // 유저가 변경한 내용 반영하기
        oData.Carrname = carrnameInput;
        oData.Url = urlInput;

        // 업데이트 진행
        oModel.update(updatePath, oData, {
          success() {
            MessageToast.show(oResourceBundle.getText("successUpdateMessage"));
          },
          error() {
            MessageToast.show(oResourceBundle.getText("errorUpdateMessage"));
          },
        });
      },

      // 다이얼로그 창 닫기 - 다이얼로그 내 close 버튼 클릭 시 호출
      onCloseDialog() {
        this.byId("updateDialog").close();
      },
    });
  }
);
