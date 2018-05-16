/**
 * [checkPhoneVerificationCode 检查验证码格式]
 * @method      checkPhoneVerificationCode
 * @param       {[string]}   code [验证码]
 * @return      {[boolean]}                   [true: 格式正确 / false: 格式错误]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-12T11:08:03+080
 */
function checkPhoneVerificationCode(code) {
  var result = true;
  if (!code) {
    toast('请输入验证码');
    result = false;
  } else {
    var pat = new RegExp('^[0-9]{6}$', 'i');
    if (!pat.test(code)) {
      toast('验证码格式错误');
      result = false;
    }
  }
  return result;
}