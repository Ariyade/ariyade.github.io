// 创建一个5*5的二维数组
var lights = [];
for (var i = 0; i < 5; i++) {
  lights[i] = [];
  for (var j = 0; j < 5; j++) {
    // 默认设置为-1表示背景
    lights[i][j] = -1;
  }
}

// 随机生成10个灯泡的位置
var count = 0;
while (count < 10) {
  // 随机生成行号和列号
  var row = Math.floor(Math.random() * 5);
  var col = Math.floor(Math.random() * 5);
  // 如果该位置没有灯泡，则设置为0，并增加计数
  if (lights[row][col] == -1) {
    lights[row][col] = 0;
    count++;
  }
}

// 创建一个5*5的表格
var table = document.createElement("table");
for (var i = 0; i < 5; i++) {
  var tr = document.createElement("tr");
  for (var j = 0; j < 5; j++) {
    var td = document.createElement("td");
    // 根据灯泡状态设置颜色或图片
    if (lights[i][j] == -1) {
      // 背景设置为白色或透明
      td.style.backgroundColor = "white";
    } else if (lights[i][j] == 0) {
      // 灯泡设置为灰色
      td.style.backgroundColor = "gray";
    } else if (lights[i][j] == 1) {
      // 灯泡设置为黄色
      td.style.backgroundColor = "yellow";
    }
    // 给每个单元格添加点击事件
    td.addEventListener("click", function() {
      // 获取被点击单元格的行号和列号
      var row = this.parentNode.rowIndex;
      var col = this.cellIndex;
      // 改变灯泡状态
      changeLights(row, col);
      // 判断是否胜利
      checkWin();
    });
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.appendChild(table);

// 改变灯泡状态的函数
function changeLights(row, col) {
  // 遍历二维数组
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      // 如果是同行同列，并且不是背景，则进行异或操作
      if ((i == row || j == col) && lights[i][j] != -1) {
        lights[i][j] ^= 1;
        // 更新表格颜色或图片
        if (lights[i][j] == -1) {
          // 背景设置为白色或透明
          table.rows[i].cells[j].style.backgroundColor = "white";
        } else if (lights[i][j] == 0) {
          // 灯泡设置为灰色
          table.rows[i].cells[j].style.backgroundColor = "gray";
        } else if (lights[i][j] == 1) {
          // 灯泡设置为黄色
          table.rows[i].cells[j].style.backgroundColor = "yellow";
        }
      }
    }
  }
}

// 判断是否胜利的函数
function checkWin() {
  // 遍历二维数组
  var sum = 0;
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      // 计算所有单元格的状态之和，忽略背景
      if (lights[i][j] != -1) {
        sum += lights[i][j];
      }
    }
  }
  
  
  
  // 如果状态之和等于10，则表示所有灯泡都被点亮，显示恭喜信息
  if (sum == 10) {
    alert("恭喜你，你赢了！");
  }
}


//检查答案的函数
function checkAnswer() {
  // 获取输入框的值
  var value = answer.value;
  // 如果等于666，则显示游戏攻略
  if (value == "666") {
    alert("游戏攻略：\n1. 点击第一行第一列的灯泡\n2. 点击第二行第二列的灯泡\n3. 点击第三行第三列的灯泡\n4. 点击第四行第四列的灯泡\n5. 点击第五行第五列的灯泡");
  } else {
    // 否则显示错误信息
    alert("答案错误，请重新输入！");
  }
}

window.onload = function() {
  // 获取输入框和按钮的元素
  var answer = document.getElementById("answer");
  var submit = document.getElementById("submit");
  // 给按钮添加点击事件
  submit.addEventListener("click", function() {
    // 调用检查答案的函数
    checkAnswer();
  });
};









