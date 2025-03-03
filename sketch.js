let inputText = "輸入的文字";
let textSizeValue = 32;
let bouncing = false;
let bounceOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0); // 修改背景顏色為黑色
  textSize(textSizeValue); // 使用 textSizeValue 設定文字大小
  fill(255); // 修改文字顏色為白色
  let x = 100; // 修改初始值為 100
  let y = 100; // 修改初始值為 100
  while (y < height) {
    for (let i = 0; i < inputText.length; i++) {
      let char = inputText.charAt(i);
      let bounceOffset = bouncing ? sin(frameCount * 0.1 + x * 0.05) * 10 : 0; // 每個字不規律跳動
      text(char, x, y + bounceOffset);
      x += textWidth(char) + 5; // 修改文字之間的間距為 5
      if (x > width) {
        x = 0;
        y += 40; // 40 是行高
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function updateText() {
  inputText = document.getElementById('textInput').value;
}

function updateTextSize() {
  textSizeValue = Number(document.getElementById('textSizeSlider').value); // 將滑桿的值轉換為數字類型
}

function toggleBounce() {
  bouncing = !bouncing; // 切換文字跳動狀態
}
