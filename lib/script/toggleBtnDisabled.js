/**
 * [closeBtnClick 不允许按钮点击]
 * @method      closeBtnClick
 * @param       {[string]}   id        [按钮id]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-13T13:18:58+080
 */
function closeBtnClick(dom) {
  let disabled = $api.attr(dom, 'disabled');
  if (!disabled) {
    $api.attr(dom, 'disabled', 'disabled');
    $api.addCls(dom, 'disabled');
  }
}

/**
 * [openBtnClick 允许按钮点击]
 * @method      openBtnClick
 * @param       {[string]}    id      [按钮id]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-13T13:19:49+080
 */
function openBtnClick(dom) {
  let disabled = $api.attr(dom, 'disabled');
  if (disabled) {
    $api.removeAttr(dom, 'disabled');
    $api.removeCls(dom, 'disabled');
  }
}