var statusCode = {
  '0000': '成功',
}

/**
 * [defaultStatusHandle 返回值控制]
 * @method      defaultStatusHandle
 * @param       {[json]}                ret           [返回值json]
 * @param       {[json]}                err           [错误json]
 * @param       {[json]}                operation     [具体操作]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-11T10:35:54+080
 */
function BMStatusHandle(ret, err, operation) {
  if (ret) {
    switch (ret.resp_code) {
      case '0000':
        try {
          operation.success(ret);
        } catch (e) { }
        break;
      default:
        try {
          operation.fail(ret.resp_desc);
        } catch (e) {}
    }
  }

  if (err) {
    alert(err.msg + err.status);
    try {
      operation.error(err);
    } catch (e) { }
  }

  try {
    operation.default();
  } catch (e) { }
}