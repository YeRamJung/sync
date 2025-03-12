//객체 선언 / 형태 : {key : value}
var fruit = {
    name : "banana",
    color : "yellow",
    origin : "Puerto Rico",
    weight : 230,
    size : 17
};

//배열객체 선언
var aFruit = [];

// for in loop 문 활용하기
for(var p in fruit){
    // console.log(fruit['name']);                     //fruit 객체의 key들이 하나씩 찍힘
    console.log(p + ":" + fruit[p]);    // fruit[p]는 p키에 해당하는 value값
    aFruit.push(fruit[p]);              // push() : array 객체의 메소드
}

console.log(aFruit);

alert(aFruit[0]);