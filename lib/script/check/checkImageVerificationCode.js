/**
 * [checkImageVerificationCode 检查验证码格式]
 * @method      checkImageVerificationCode
 * @param       {[string]}   verificationCode [验证码]
 * @return      {[boolean]}                   [true: 格式正确 / false: 格式错误]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-12T11:08:03+080
 */
function checkImageVerificationCode(code) {
  var result = true;
  if (!code) {
    toast('请输入图片验证码');
    result = false;
  }
  else {
    var pat = new RegExp('^[A-Za-z0-9]{4}$', 'i');
    if (!pat.test(code)) {
      toast('图片验证码格式错误');
      result = false;
    }
  }
  return result;
}