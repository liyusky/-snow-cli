/**
 * [showProgress 弹出等待框]
 * @method      showProgress
 * @param       {[string]}    msg      [要显示的信息]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-11T10:34:06+080
 */
function showProgress(msg) {
  api.showProgress({
    title: msg,
    modal: true
  });
}

/**
 * [hideProgress 关闭等待框]
 * @method      hideProgress
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-11T10:35:54+080
 */
function hideProgress() {
  api.hideProgress();
}