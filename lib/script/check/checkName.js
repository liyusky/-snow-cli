/**
 * [checkName 检查姓名]
 * @method      checkName
 * @param       {[string]}     name   [姓名]
 * @return      {[boolean]}           [true: 格式正确 / false: 格式错误]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-21T17:23:25+080
 */
function checkName(name) {
  var result = true;
  if (!name) {
    toast('姓名不能为空');
    result = false;
  }
  else {
    var reg = /^[\u4e00-\u9fa5]{2,}$/;
    if (!reg.test(name)) {
      toast('姓名格式错误');
      result = false;
    }
  }
  return result;
}