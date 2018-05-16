
function setImageVerificationCodeCanvas(id) {
  
  var ctx = canvas.getContext('2d');
  var canvas = document.getElementById(id);
  var codeArr = [];
  var code = setCode(4);
  var width = canvas.width;
  var height = canvas.height;

  ctx.textBaseline = "middle";
  ctx.font = width / 2 + 'px SimHei';
  ctx.fillStyle = randomColor();
  ctx.fillRect(0, 0, width, height);

  for (var i = 0; i < 4; i++) {
    let code = codeArr[i];
    ctx.fillStyle = randomColor(); //随机生成字体颜色
    /* ctx.shadowOffsetX = randomNum(-3, 3);
    ctx.shadowOffsetY = randomNum(-3, 3);*/
    ctx.shadowBlur = randomNum(-3, 3);
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    var x = this.options.width / 5 * i;
    var y = this.options.height / 2;
    var deg = randomNum(30, -30);
    /**设置旋转角度和坐标原点**/
    ctx.translate(x, y);
    ctx.rotate(deg * Math.PI / 180);
    ctx.fillText(code, 0, 0);
    /**恢复旋转角度和坐标原点**/
    ctx.rotate(-deg * Math.PI / 180);
    ctx.translate(-x, -y);
  }

  /**绘制干扰线**/
  for (var i = 0; i < 4; i++) {
    ctx.strokeStyle = randomColor();
    ctx.beginPath();
    ctx.moveTo(randomNum(0, width / 2), randomNum(0, height / 2));
    ctx.lineTo(randomNum(0, width / 2), randomNum(0, height));
    ctx.stroke();
  }

  /**绘制干扰点**/
  for (var i = 0; i < width / 4; i++) {
    ctx.fillStyle = randomColor();
    ctx.beginPath();
    ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
    ctx.fill();
  }

  /**生成一个随机色**/
  function randomColor() {
    var r = randomNum(256);
    var g = randomNum(256);
    var b = randomNum(256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  /**生成一个多位随机数**/
  function randomNum(max) {
    var min = arguments[1];
    if (!min) min = 0;
    return Math.floor(Math.random() * max + min);
  }

  function setCode(length) {
    var code = '';
    for (let i = 0; i < length; i++) {
      code += randomNum(10);
      codeArr.push(code);
    }
    return code;
  }

  return code;
}