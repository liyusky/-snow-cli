/**
 * [checkLogin 检查用户是否登陆]
 * @method      checkLogin
 * @param       {json}        callback      [{success:callbackFun,fail:callbackFun} 成功/失败状态下执行的函数]
 * @return      {[boolean]}                 [true:已登录  /  false: 未登录]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-07T14:12:19+080
 */
function checkLogin(params) {
  var flag = true;
  var openLogin = true;
  try {
    if (typeof params.openLogin === 'boolean') openLogin = params.openLogin;
  } catch (e) { }

  User = $api.getStorage('User');
  if (User.Login) {
    try {
      params.success(flag);
    } catch (e) { }
  }
  else {
    flag = false;
    if (openLogin) {
      toast('请先登录');
      open('empower');
    }
    try {
      params.fail(flag);
    } catch (e) { }
  }

  try {
    params.default(flag);
  } catch (e) { }

  return flag;
}