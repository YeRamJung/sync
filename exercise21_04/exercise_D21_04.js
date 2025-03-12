// 면적 구하는 함수
function calculateArea(length, width){
    var extent = length * width;
    return extent;
}


// 버튼을 통해 호출되는 함수 - 입력필드로 받은 가로세로 값을, 면접 구하는 함수 calculateArea에게 넘김 
function calculate(){
    var length = document.getElementById("len").value;
    var width = document.getElementById("wid").value;
    var area = calculateArea(length, width);
    if(area == 0){
        area = "없음";
    }
    
    document.getElementById("result").innerHTML = "계산된 결과: " + area;  // h3태그의 id로 접근해서 계산 결과 뿌리기

}