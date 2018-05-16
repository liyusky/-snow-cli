/**
 * [checkNetwork 检查网络连接]
 * @method      checkNetwork
 * @param       {[json]}         callback            [{success:callbackFun,fail:callbackFun} 成功/失败状态下执行的函数]
 * @return      {[boolean]}                          [true:已连接网络 / false:未连接网络]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-07T14:04:38+080
 */
function checkNet(params) {
  var flag = true;
  try {
    if (typeof params.openOffline === 'boolean') openOffline = params.openOffline;
  } catch (e) { }
  if (api.connectionType !== 'none') {
    try {
      params.success(flag);
    } catch (e) { }
  } else {
    flag = false;
    if (openOffline) open('offline');
    try {
      params.fail(flag);
    } catch (e) { }
  }

  try {
    params.default(flag);
  } catch (e) { }

  return flag;
}