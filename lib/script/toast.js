/**
 * [toast 显示toast弹出消息]
 * @method      toast
 * @param       {[string]}                msg           [需要显示的消息]
 * @constructor
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-06T11:47:18+080
 */
function toast(msg) {
  api.toast({
    msg: msg,
    duration: 2000,
    location: 'middle'
  });
}