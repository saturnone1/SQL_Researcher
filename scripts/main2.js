const myImage = document.querySelector("img");

let num = 1;
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (num === 18) {
        myImage.setAttribute("src", "/images/" + "1 (" + String(num) + ").jpg");
        //alert(num);
        num = 1;
    }
    else{
        myImage.setAttribute("src", "/images/" + "1 (" + String(num) + ").jpg");
        //alert(num);
        num += 1;
    }
};

//버튼과 헤더 변수 선언
let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1");

// 함수 선언
function setUserName() {
    const myName = prompt("제목 이름 적어주세용");
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `자바스크립트로 바꿨습니다(2) ${myName}`;
    }
}

// 버튼에 클릭 이벤트 연결
myButton.onclick = () => {
    setUserName();
};

// 이름이 없으면 다시 받지만 있으면 그대로 유자
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `누누와 나나. ${storedName}`;
}