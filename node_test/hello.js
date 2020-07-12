// 200709 목요일

// console.log("Welcome to the class");
// console.log("Hello");
// console.log(20+30);
// console.log("come"+"home");
// console.log(20+"hello"+100);

// // 옛날 타입, 글로벌 변수 선언/초기화하기
// var fish_name = "고등어";
// var price = 3000;

// // 요즘 타입 선언/초기화
// let fish_name = "고등어";
// let price = 3000; // 3000을 price에 저장하기

// console.log(fish_name+"는 "+price+"원");

// price = 5000; // 이미 선언/초기화한 변수 다시 초기화하기

// console.log(fish_name+"는 "+price+"원");

// console.log(price*3);

// // 실습문제1
// // 넓이와 둘레길이를 구하는 코드를 만드세요.
// // a는 11, b는 7일 때의 넓이와 둘레의 길이를 구하세요.
// let a = 11;
// let b = 7;

// let area = a*b;
// let perimeter = 2*(a+b);

// console.log("");
// console.log("실습문제1");
// console.log("a는 "+a+", b는 "+b);
// console.log("넓이는 "+area);
// console.log("둘레는 "+perimeter);
// console.log("");

// // 실습문제2
// // a의 길이가 20으로 주어졌을 때,
// // 표면적(area)와 부피(volume)을 구하세요
// a = 20;

// area = 6*a**2
// let volume = a**3;

// console.log("실습문제2");
// console.log("a는 "+a);
// console.log("표면적은 "+area);
// console.log("부피는 "+volume);
// console.log("");

// // 실습문제3
// // 현재 속도가 90km/h다. 이를 mp/h로 계산하는 코드를 작성하세요.
// let kmh = 90;
// let mph = 0.6214*kmh;

// console.log("실습문제3");
// console.log("kmh는 "+kmh);
// console.log("mph는 "+mph);
// console.log("");

// let sky;
// console.log(sky);

// // 위 코드는 실행되지 않음.
// // error code : undefined => 선언은 되어있는데 데이터가 할당되어있지 않다(초기화가 되어있지 않다, 값을 저장하지 않았다)는 뜻임.

// let ground = "";
// console.log(ground);

// // 위 코드는 undefined가 아님.

// // 연산자
// let a = 75;
// let b = 20;

// let result = a+b;
// console.log("a+b = "+result);

// result = a-b;
// console.log("a-b = "+result);

// result = a/b;
// console.log("a/b = "+result);

// result = a%b; // "모듈로" (나머지 구하기)
// console.log("a%b = "+result);
// console.log("");

// result = a++; // a를 result에 저장하고(result = a), a는 a에 +1 더하는(a = a+1) 작업을 수행한다
// console.log("result = "+result);
// console.log("a = "+a);
// console.log("");

// result = ++a; // a에 1을 먼저 더하고(a = a+1), a를 result에 저장하는(result = a) 작업을 수행한다 (더하기를 먼저 해라!)
// console.log("a = "+a);
// console.log("result = "+result);
// console.log("");

// result = b--; // b를 result에 저장하고(result = b), b는 b에 -1 빼는(b = b-1) 작업을 수행한다
// console.log("result = "+result);
// console.log("b = "+b);

// // true/false로 반환하는 연산자(비교연산자)
// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a>=b);
// console.log(a<b);
// console.log(a<=b);
// console.log("");

// a = 3;
// b = 7;
// let c = 9;
// let d = 10;

// // true/false로 반환하는 연산자(논리연산자)
// console.log(a>5 && b<8);
// console.log(c>7 || d<5);
// console.log("");

// // 삼항연산자(=단순if문)
// console.log(a>b ? 500:900);
// console.log("");

// // 조건문
// if(true){true실행문}else{false실행문}

// b = 120;
// if(a>b){
//     console.log("A가 B보다 크다.");
// }else{
//     console.log("A가 B보다 작다.");
// }
// console.log("");

// a = 100;
// if(a==30){
//     console.log("1.");
// }else if(a==50){
//     console.log("2.");
// }else{
//     console.log("100.");
// }
// console.log("");

// // 실습문제4
// // 1번 학생의 점수가 83점입니다.
// // 다음의 조건문을 작성하시오.
// // 점수가 0보다 작거나 100보다 크면, "그런 점수 없음" 출력
// // 점수가 80 이상이면, "83점은 A학점입니다." 출력
// // 점수가 80점 미만이면, "43점은 B학점입니다." 출력
// let score = 83;
// if(score<0 || score>100){
//     console.log("그런 점수 없음.");
// }else if(score>=80){
//     console.log(score+"점은 A학점입니다.");
// }else{
//     console.log(score+"점은 B학점입니다.");
// }
// console.log("");

// // 함수(functions)의 정의 방법 1 : 컨벤셔널(오리지널)
// function addNum(a, b){ // 스크립터너 : 변수 선언할 때 데이터 타입 안 써도 되는 거?
//     let result = a + b;
//     return result;
// }
// // 함수의 사용, 함수의 호출(functions call)
// let ret = addNum(3, 4);
// // 값 출력
// console.log(ret);

// // 함수(functions)의 정의 방법 2 : 변수에 함수를 저장해서 사용함.
//  let addNum2 = function(a, b){
//     let result = a + b;
//     return result;
// }
// console.log("");

// ret = addNum2(5, 6);
// console.log(ret);
// console.log("");

// // 함수(functions)의 정의 방법 3 : es6 문법(최신 javascripts문법)
// // function을 적지 않고 처리하는 방법이다.
// let addNum3 = (a, b) => {
//     let result = a + b;
//     return result;
// }
// ret = addNum3(10, 20);
// console.log(ret);
// console.log("");

// 함수 선언할 때도 var나 let이나 상관없는가?
// var와 let의 차이
    // var : 자바의 멤버변수 개념. 전역에서 쓸 수 있어서 "글로벌 변수"라고 부름.
        // 함수 안에서 var를 쓰면, 함수가 끝난 다음에도 var 변수값이 사라지지 않는다.
            // 함수 안에서의 변수는 왠만하면 let을 쓰자.
    // let : 지역변수 개념.

// // 자바스크립트의 객체 생성하기 방법1 : 이렇게 객체생성 거의 안 함.
// let cook = new Object(); // 커스텀 객체를 만들 때는 무조건 new Object();임.
// // cook의 멤버변수 만들기
// cook.name = "홍길동";
// cook.age = 27;
// // cook의 함수 만들기
// cook.make = () => {
//     return "빵을 만든다"
//     // console.log("빵을 만든다"); <= 이렇게 써놓고 log()안에 넣지 말기 ㅎ.ㅎ
// }
// console.log(cook.name+" "+cook.age+" "+cook.make());

// // 자바스크립트의 객체 생성하기 방법2 : 보통 이렇게 만듦.
//     // 아래 형식은 JSON 형식과 같음.
//     // JSON : Javascript object notation
// let cook2 = {
//     // 멤버변수 만들기
//     name : "김나나",
//     age : 24,
//     make : () => {
//         return "한식을 만든다";
//     }
// }
// console.log(cook2.name+" "+cook2.age+" "+cook2.make());

// 200710 금요일

// // json 오브젝트(객체) 생성
// // 자바로 치면 클래스 생성
// let football = {
//     color : "Blue", // 이게 멤버변수라고 생각하면 됨. 여기서 "Blue"가 "데이터"
//     size : 36, // 키 : 밸류(key : value)
//     isActive : true,
//     add : (x,y) => {
//         let ret = x+y;
//         return ret;
//     }
// } // <- 이 중괄호가 바로 json 오브젝트! 대괄호는 json Array!

// let result = football.add(3,4);
// console.log(result);
// console.log("");

// // 위 객체의 멤버변수에 접근하기
// let color = football.color;
// console.log(color);

// 위 함수를 자바 코드로 표현하면 아래와 같다.
// class Football{
//      String color;
//      public Football(){
//          color = blue;
//      }
//     int add(int x, int y){
//        int ret = x+y;
//        return ret;
//     }
// }

// // 단일 데이터 처리(어레이 설명을 위한 예시)
// let name = "James";

// // JsonArray
//     // Array(배열) : 데이터를 "여러개" 저장하기 위해서 사용.
// // 이게 핵심임.
// let names = [
//     "James", // ,(콤마)로 구분
//     "John",
//     "Michael"
// ];
// // Array 값 가져오기(어레이 데이터에 엑세스)
// names[0]; // [0] => 인덱스
// names[1];
// names[2];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// // array 안에 "객체(오브젝트)" 데이터를 여러개 저장하기
// let employee = [
//     {name : "James", age : 24},
//     {name : "John", age : 25},
//     {name : "Michael", age : 30}
// ];

// employee[0];
// employee[1];
// employee[2];

// console.log(employee[1]);
// // 위 코드의 출력값
// // { name: 'John', age: 25 }

// // 이 Array의 오브젝트 안의 데이터에 접근하기
// employee[0].name;
// employee[0].age;

// console.log(employee[0].name);
// // 위 코드의 출력값
// // James

// let people = [
//     {name : "Mike", age : 24, 
//         pet : [
//             {name : "A", type : "cat"},
//             {name : "B", type : "dog"}
//         ]}, // 앞의 오브젝트는 1명에 대한 데이터
//     {name : "John", age : 30, 
//         pet : [
//             {name : "C", type : "cat"},
//             {name : "D", type : "dog"}
//         ]},
//     {name : "Harry", age : 29, pet : []}
// ]
// console.log(people[0]);
// console.log("");
// // 위 코드의 출력값
// // { name: 'Mike', age: 24, pet: [ 'dog', 'cat' ] }

// // 실습문제 1
// // 첫번째 사람의 나이를 출력하시오
// console.log(people[0].age);
// // 두번째 사람의 이름을 출력하시오
// console.log(people[1].name);
// // 세번째 사람의 pet을 출력하시오
// console.log(people[2].pet);
// // 첫번째 사람의 첫번째 pet을 출력하시오
// console.log(people[0].pet[0]);

// // 실습문제 2
// // 첫번째 사람의 두번째 pet 이름을 출력하시오
// console.log(people[0].pet[1].name);
// // 두번째 사람의 첫번째 pet은 어떤 동물인가?
// console.log(people[1].pet[0].type);

// // ★ 데이터 변경, 추가 ★ (중요)
// names = [
//     "James", // ,(콤마)로 구분
//     "John",
//     "Michael"
// ];
// // 실습문제 3
// // 두번째 데이터를 Mike로 변경하기
// names[1] = "Mike";
// console.log(names);
// // 출력값
// // [ 'James', 'Mike', 'Michael' ]

// // Array에 데이터 추가하기
// names.push("Chris");
// console.log(names);
// console.log("");

// // 데이터 맨 앞에 추가하기 : unshift()
// let arr1 = [1, 2, 3];
// arr1.unshift(100);
// console.log(arr1);


// // !! 이 부분 재정리
// // ★★★ splice(start, count) - 추출 ★★★
//     // start는 인덱스 숫자, count는 가져올 갯수임 주의.
// // array에서 원하는 위치부터 데이터를 빼오고 싶을 때 사용하지만, 지우는 것도 가능함.
// let arr2 = ["one", "two", "three", "four"];
// // 맨 앞의 데이터를 지워보고, (꼼수)
// // 두번째 데이터부터 데이터를 끝까지 가져온다
// let ret_arr2 = arr2.splice(1,3);
// console.log("arr2 : "+arr2);
// console.log("ret_arr2 : "+ret_arr2);
// console.log("");


// // Array 데이터 지우기 : 맨 뒤의 원소 삭제하기
// names.pop();
// console.log(names);

// // array의 모든 원소를 하나로 합치기
// let ret_names = names.join("-"); // join() 파라미터 영역에 넣는 문자열로 데이터들을 연결해준다
// console.log(ret_names);
// // 결과값
// // James-Mike-Michael

// // ★★★ filter(필터) ★★★
// let ret_filter = names.filter(name => name.length > 4); // "이름"의 "길이"가 4보다 큰 것만 가져와라.
// console.log(ret_filter);

// !! 여기서부터 정리

// 루프로 Array를 순서대로 출력하기
// 방법 1. Array에 저장된 모든 원소 출력(추천방법)
names = ["James","John","Michael"];
for(let i = 0; i < names.length ; i++){
    console.log(names[i]);
}
console.log("");

// !! 여기 에러남 고치기
// 방법 2. Array에 내장된 반복(loop) 메소드로 출력하기(비추 : 헷갈릴 수 있기 때문)
names.foreach(function(name){ // names에 있는 객체들을 순서대로 name이라는 변수로 받아서 처리하겠다
    console.log(name);
})
console.log("");

num_arr = [2,5,8,10];
// 실습문제 4
// 각 원소를 제곱해서 화면에 출력하시오
for(let i = 0; i < num_arr.length ; i++){
    let data = num_arr[i]**2;
    console.log(data);
}

// !!있음 정리