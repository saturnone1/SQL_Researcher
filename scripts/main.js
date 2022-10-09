const myHeading = document.querySelector("h1");
myHeading.textContent = "누누와 나나 - 자바스크립트로 바꿨음";

/* 알림 팝업창을 띄움 */
// alert("Hello!") 

// 클릭 이벤트
// document.querySelector("html").addEventListener("click", function(){ 
//     alert("그만 만져!")
// });

// 클릭 이벤트 선언방식 2
document.querySelector("html").addEventListener("click", () => { 
    alert("그만 만져!")
});