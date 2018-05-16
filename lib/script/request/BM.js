/**
 * [request 发送ajax请求]
 * @method      request
 * @param       {[params]}   params    [发送请求需要的地址、数据及完成后的回调函数]
 * @paramDemo   {url(string): 地址名称, data(json): 需要发送的参数, tip(boolean/string): 要给用户显示的信息, success(fn): 执行成功后的回调, fail(fn): 执行失败后的回调, error(fn): 发生错误后的回调, default(fn): 默认必须执行的回调}
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-13T15:00:38+080
 */
function BM(params) {
  var url = null;
  // var url = api.loadSecureValue({ //生产环境
  //   sync: true,
  //   key: params.url
  // });

  try {
    params.operation.before();
  } catch (e) {}

  // var url = RequestProductURL[params.url]; //生产环境
  // url = RequestURL[params.url];  //后台测试服务器
  url = developmentBMApi[params.url];   // 前端独立测试
  // alert(url)

  if (params.tip) {
    switch (typeof params.tip) {
      case 'string':
        showLoading(params.tip);
        break;
      case 'boolean':
        showLoading('获取数据中...');
        break;
    }
  }

  api.ajax(
    {
      url: url,
      method: 'GET',
      data: {
        values: params.data
      }
    },
    function (ret, err) {
      // alert(JSON.stringify(ret))
      // alert(JSON.stringify(err))
      AppStatusHandle(ret, err, params.operation);
    }
  );
}