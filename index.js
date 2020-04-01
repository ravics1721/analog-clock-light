const hour = document.querySelector(".hr");
const min = document.querySelector(".mn");
const sec = document.querySelector(".sd");
const text = document.querySelector(".text");

function updateTime() {
  const time = new Date();
  const hh = time.getHours();
  const mm = time.getMinutes();
  const ss = time.getSeconds();
  hour.style.transform = `rotateZ(${((hh*30)+(mm/12))}deg)`;
  min.style.transform = `rotateZ(${mm*6}deg)`;
  sec.style.transform = `rotateZ(${ss*6}deg)`;
};
setInterval(updateTime,);

function updateTimeD() {
  const now = new Date().toLocaleDateString();
  text.innerHTML = now;
};
setInterval(updateTimeD,);
