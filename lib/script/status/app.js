var statusCode = {
  200: '成功',
  301: '业务异常（用户名或者密码错误、短时间内多次登录失败，请稍后重试）',
  310: '未开户',
  311: '身份认证未认证',
  312: '紧急联系人未认证',
  313: '芝麻信用未认证',
  314: '手机运营商未认证',
  318: '暂无出借模版',
  401: '系统异常'
}

/**
 * [statusHandle 关闭等待框]
 * @method      hideProgress
 * @param       {[json]}                ret           [返回值json]
 * @param       {[json]}                err           [错误json]
 * @param       {[json]}                operation     [具体操作]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-11T10:35:54+080
 */
function AppStatusHandle(ret, err, operation) {
  // alert(JSON.stringify(ret))
  // alert(JSON.stringify(err))
  try {
    operation.before();
  } catch (e) {}

  if (ret) {
    if (ret.message) toast(ret.message);
    switch (ret.code) {
      case 200:
        try {
          operation.success(ret.data);
        } catch (e) {}
        break;
      case 401:
        try {
          operation.fail(ret.description);
        } catch (e) {}
        break;
    }
  }

  if (err) {
    alert(err.msg + err.status);
    try {
      operation.error(err);
    } catch (e) {}
  }

  try {
    operation.default();
  } catch (e) {}
}