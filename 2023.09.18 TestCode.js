// 클로저 ex.
function a() {
  let v = 1;
  return function b() {
    console.log(v);
  };
}
const c = new a();
console.dir(c);

// 호이스팅 ex.
console.log(text); // (선언 + 초기화 된 상태)
text = "Hanamon!"; // (선언 + 초기화 + 할당 된 상태)
var text;
console.log(text);

console.log(text2); // (선언 된 상태, 초기화(메모리 공간 확보와 undefined로 초기화) 안되서 참조 불가능 -> 에러남)
let text2; // 여기서 초기화 단계가 실행됨

foo1(); // 함수 선언문에서는 호이스팅 일어난다.
foo2(); // 함수 표현식이라서 호이스팅 안된다.
function foo1() {
  console.log("Hello");
}
var foo2 = function () {
  console.log("world");
};

// 함수 호이스팅 ex.
console.log(sum(1, 2));

function sum(a, b) {
  return a + b;
}

const sum = function (a, b) {
  return a + b;
};
