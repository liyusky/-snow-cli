/**
 * [readyToResend 等待下一次发送验证码]
 * @method      readyToResend
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-12T14:14:40+080
 */
function readyToResend(dom) {
  closeBtnClick(dom);
  var second = 60;
  var animation = setInterval(function () {
    if (second > 0) {
      $api.text(dom, second + '秒后重试');
      second--;
    }
    else {
      clearInterval(animation);
      $api.text(dom, '获取验证码');
      openBtnClick(dom);
    }
  }, 1000);
}