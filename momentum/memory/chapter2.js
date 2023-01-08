// 2.3
// Const는 재선언과 재할당이 불가능(주로 const 사용)
// Let은 재선언 불가능 재할당 가능(가끔씩 사용)
// Var은 재선언 가능, 재할당 가능(오래된 자바스크립트 강좌나 책에서 자주 나옴 규칙을 가지고 있지 않음, 자주 사용하지 않으니 쓰지말기)


// 2.5 Arrays

const daysOfWeek = ["mon", "tue", "wed",
 "thu", "fri", "sat"];

 // 아이템 받아오기
 console.log(daysOfWeek);

 // 아이템 추가하기
 daysOfWeek.push("sun");

 console.log(daysOfWeek);

// 2.6 Objects

// Objects 생성하기
const player =  {
    name: "minki",
    points: 10,
    fat: true,
};

// Objects 출력하기
console.log(player);
console.log(player.name); // player.name == player["name"]

// Objects 안의  fat을 수정하는 것 
//  const안에 무언가를 수정할 땐 에러가 안나옴 == 업데이트하는 것
player.fat = false;
player.points = player.points + 15;
// Objects안에 추가하는 방법
player.lastName = "minggi";
console.log(player);

// null = 비어있음(이 들어가 있는것)
// undefined = 아무것도 없다 -> 값이 없다.

 // 2.7, 2.8 Functions
 // function은 어떤 코드를 캡슐화해서 실행을 여러 번 할 수 있게 해준다.
 // c, c++로 본다면 함수 선언, 객체
//  function sayHello(){
//     console.log("Hello");
//  }

function plus(a,b){
    console.log(a,b);
}
// plus(?,?);
function divide(a,b){
    console.log(a/b);
}
const player = {
    name: "minki",
    sayHello: function (otherPersonsName){
        console.log("Hello " + otherPersonsName + " nice to meet you! ");
    },
}

console.log(player.name);
player.sayHello("minggi");
player.sayHello("nico");

// 2.9, 2.10 Recap

// 계산기 만들기 function과 object사용
const calcultor = {
    add: function (a, b) {
    console.log(a + b);
    },
    minus: function (a, b) {
    console.log(a - b);
    },
    div: function (a, b) {
    console.log (a / b);
    },
    multi: function (a, b) {
    console.log (a * b);
    },
    power: function (a, b) {
    console.log (a ** b);
    },
    };
    
    calcultor.add(3, 1);
    calcultor.minus(5, 2);
    calcultor.div(25, 5);
    calcultor.multi(11, 10);
    calcultor.power(2, 4);

// 2.11 Returns
// const age = 00;
function calculateKRAge(ageOfForeigner){
    return ageOfForeigner +2;
}

const krAge = calculateKRAge(age);

console.log(krAge);

// // 2.13 Conditionals

// // prompt는 사용자에게서 message를 보여주고 값을 넣으라고 하는 함수임
// // (사용을 자주 하지는 않음)
// const age = parseInt("15");
// // console.log(typeof age); // typeof는 변수의 type을 확인하는 명령어

// // type를 변경하는 방법
// // parseInt는 string을 number로 바꿔주는 함수다
// // console.log(typeof "15", typeof parseInt("15")); 
// // console.log(age, parseInt(age));

const age = parseInt(prompt("How old are you?"));

// isNaN을 사용하면 number인지 아닌지를 판별한다.
// isNaN은 boolean을 반환한다.
// false면 number, true면 string

if(isNaN(age) || age < 0)
{
    console.log("Please write a real positive number");
}
else if (age < 18)
{
    console.log("You are too young");
}
else if (age >= 18 && age <=50)
{
    console.log("You can drink");
}
else if (age >50 && age <= 80)
{
    console.log("You should exercise");
}
else if (age>80)
{
    console.log("You can do whatever you want");
}
else
{
    console.log("You can't drink")
}

console.log(parseInt("2"));