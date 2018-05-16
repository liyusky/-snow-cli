/**
 * [checkBankCard 检查银行卡]
 * @method      checkBankCard
 * @param       {[string]}     card   [银行卡]
 * @return      {[boolean]}           [true: 格式正确 / false: 格式错误]
 * @version     [1.0]
 * @datetime    2017-10-21T17:23:25+080
 */
function checkBankCard(card) {
  var result = true;
  if (!card) {
    toast('银行卡不能为空');
    result = false;
  } else {
    var reg = /^\d{16,19}$/;
    if (!reg.test(card)) {
      toast('储蓄卡格式错误');
      result = false;
    }
  }
  return result;
}