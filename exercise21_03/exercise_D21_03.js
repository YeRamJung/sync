var toDoList = [];                         // 할 일 목록 담을 배열
var patternN = /^[0-9]*$/;                 // 숫자
var patternH = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;       // 한글 문자


while(true){
    var answer = prompt("<1.입력 2.삭제 3.종료>", "할 일 번호를 적으시오");  // 프롬프트 창
    
    //종료하기
    if(answer == 3){
        break;
    }

    //입력하기
    else if(answer == 1){
        var toDoAnswer = prompt('할 일을 입력하시오');
        //입력받은 값을 배열에 push
        toDoList.push(toDoAnswer);
        
        console.log("현재 할 일 목록: ", toDoList);
    }

    //삭제하기
    else if(answer == 2){

        var deleteIndex = prompt(toDoList, '삭제할 할 일의 번호를 입력하세요(0부터 시작)');   // 입력받는 값은 string 형태

        // (방법 1) 인데스로 입력받아서 삭제하는 경우 - 원래 문제
        /* if(deleteIndex >= 0 && deleteIndex < toDoList.length){
            //prompt창에서 입력받은 값을 정수로 형변환
            parseInt(deleteIndex);
            // 삭제 진행
            toDoList.splice(deleteIndex, 1)
        }else{
            alert('없는 항목입니다.');
        } */



        // (방법 2) 인덱스(숫자) or 할 일명(문자) 아무거나로 입력받고, 숫자인지 문자인지 판단해서 삭제하는 방법 - 정규식 활용

        
        if(patternN.test(deleteIndex)){                           // 숫자인 경우
            debugger;
            if(deleteIndex >= 0 && deleteIndex < toDoList.length){
                toDoList.splice(deleteIndex, 1);
            }else{
                alert('없는 항목입니다.');
            }

        }else if(patternH.test(deleteIndex)){                    // 한글인 경우
            
            if(!toDoList.includes(deleteIndex)){
                alert('없는 항목입니다.');
            }

            else{
                
                for(var i = 0; i < toDoList.length ; i++){
                    if(toDoList[i] == deleteIndex){
                        toDoList.splice(i, 1);
                    }
                }
            }
            
        }else{
            alert('다시 입력하세요');
        }

    }
}

console.log("최종 할 일 목록: ", toDoList);

