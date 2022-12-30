//동적인 배경전환
// const images = [
//   "0.jpg",
//   "1.jpg",
//   "2.jpg",
//   "3.jpg",
//   "4.jpg",
//   "5.jpg",
//   "6.jpg",
//   "7.jpg",
//   "8.jpg",
//   "9.jpg",
//   "10.jpg",
//   "11.jpg",
//   "12.jpg",
//   "13.jpg",
//   "14.jpg",
//   "15.jpg",
//   "16.jpg",
//   "17.jpg",
// ]; // 이렇게 배열로  나열하는 것보다  - 이러면 문자열로 받기 때문에도 안됨.
// const chosenImage = images[Math.floor(Math.random() * images.length)];

const idx = Math.floor(Math.random() * 21);
const body = document.querySelector("body");
body.style.backgroundImage = `url(./img/${idx}.jpg)`;
all.style.width = "100%";
all.style.height = "100vh";
all.style.backgroundRepeat = "no-repeat";

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
// document.get;

/*
gif 실험 성공   24-25row 수정 
前
const idx = Math.floor(Math.random() * 20);
body.style.backgroundImage = `url(./img/${idx}.jpg)`;
後
const idx = 21;
body.style.background = `url(./img/${idx}.gif)`;  

*/
// const idx = 21;
// body.style.background = `url(./img/${idx}.gif)`;
