// id, class 불러오기
const canvas = document.getElementById("drawing-board");
const ctx = canvas.getContext("2d");
const toolbar = document.getElementById("toolbar");
const colorList = Array.from(document.getElementsByClassName("colorList"));
const lineColor = document.getElementById("stroke");
const save = document.getElementById("save");

// canvas의 X축
const canvasOffsetX = canvas.offsetLeft;
// canvas의 Y축
const canvasOffsetY = canvas.offsetTop;

// cansvas의 가로 길이
canvas.width = window.innerWidth - canvasOffsetX;
// canvas의 세로 길이
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
// 선 굵기 default값
let lineWidth = 5;

//
toolbar.addEventListener("click", (event) => {
  if (event.target.id === "clear") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

// 선의 색 변경
toolbar.addEventListener("change", (event) => {
  if (event.target.id === "stroke") {
    ctx.strokeStyle = event.target.value;
  }

  // 선의 굵기 변경
  if (event.target.id === "lineWidth") {
    lineWidth = event.target.value;
  }
});

// mousedown 시 선 표시
canvas.addEventListener("mousedown", (event) => {
  isPainting = true;

  ctx.beginPath();
  ctx.moveTo(event.clientX - canvasOffsetX, event.clientY - canvasOffsetY);
});

// mouseup 시 선 표시 X
canvas.addEventListener("mouseup", (event) => {
  isPainting = false;
});

// mousemove 시 선이 따라 움직임
canvas.addEventListener("mousemove", (event) => {
  if (!isPainting) {
    return;
  }

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";

  ctx.lineTo(event.clientX - canvasOffsetX, event.clientY - canvasOffsetY);
  ctx.stroke();
});

function onColorClick(event) {
  ctx.strokeStyle = event.target.dataset.color;
  ctx.fillStyle = event.target.dataset.color;
}

function onSave() {
  // URL로 인코딩해서 저장
  const url = canvas.toDataURL();
  // a 태그를 통해 가짜 링크 생성
  const a = document.createElement("a");
  // 링크의 href는 url로 저장
  a.href = url;
  // "myDrawing.jpg로 다운로드"
  a.download = "myDrawing.jpg";
  a.click();
}

colorList.forEach((color) => color.addEventListener("click", onColorClick));
save.addEventListener("click", onSave);
