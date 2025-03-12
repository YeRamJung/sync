sap.ui.define(["sap/ui/core/format/DateFormat"], (DateFormat) => {
  "use strict";

  return {
    formatDate(birthdate) {
      if (!birthdate) {
        return ""; // 날짜가 없으면 빈 문자열 반환
      }

      const formatter = DateFormat.getDateInstance({
        pattern: "yyyy/MM/dd", // 날짜 형식 변환
      });

      return formatter.format(new Date(birthdate));
    },

    isFutureMonth(birthdate) {
      const today = new Date();
      var currentMonth = today.getMonth() + 1; // 0부터 반환하므로 + 1을 해준다

      var birthMonth = new Date(birthdate).getMonth() + 1; // 생년월일의 월 반환

      return birthMonth > currentMonth ? "Favorite" : "Flagged"; // 현재 달보다 생일달이 나중이면 Favorite 출력
    },
  };
});
