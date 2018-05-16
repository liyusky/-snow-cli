/**
 * [checkPhone 检查手机号格式]
 * @method      checkPhone
 * @param       {[string]}    mobile      [手机号]
 * @return      {[boolean]}               [true: 格式正确 / false: 格式错误]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-10T16:31:33+080
 */
function checkPhone(phone) {
  var tipFlag = arguments[1]; 
  var result = true;
  if (!phone) {
    if (tipFlag) toast('手机号不能为空');
    result = false;
  }
  else {
    if (phone.length < 11) {
      if (tipFlag) toast('请不要选择短号');
      result = false;
    } else {
      var pat = new RegExp('^(?:13|14|15|17|18)[0-9]{9}$', 'i');
      if (!pat.test(phone)) {
        if (tipFlag) toast('手机号格式错误');
        result = false;
      }
    }
  }
  return result;
}