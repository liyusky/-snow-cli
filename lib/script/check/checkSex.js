

/**
 * [checkVerificationCode 检查验证码格式]
 * @method      checkVerificationCode
 * @param       {[string]}   verificationCode [验证码]
 * @return      {[boolean]}                   [true: 格式正确 / false: 格式错误]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-12T11:08:03+080
 */
function checkVerificationCode(verificationCode) {
  var result = true;
  if (!verificationCode) {
    alertMsg('请输入验证码');
    result = false;
  } else {
    var pat = new RegExp('^[0-9]{6}$', 'i');
    if (!pat.test(verificationCode)) {
      alertMsg('验证码格式错误');
      result = false;
    }
  }
  return result;
}

/**
 * [checkUrl 检查URL格式]
 * @method      checkUrl
 * @param       {[string]}    url       [网址]
 * @return      {[boolean]}             [true: 格式正确 / false: 格式错误]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-21T17:15:47+080
 */
function checkUrl(url) {
  var result = true;
  if (!url) {
    result = false;
  }
  return result;
}

/**
 * [checkSex 检查性别]
 * @method      checkSex
 * @param       {[string]}    sex   [男 / 女]
 * @return      {[boolean]}         [true: 格式正确 / false: 格式错误]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-21T17:17:54+080
 */
function checkSex(sex) {
  var result = true;
  if (!sex) {
    // alertMsg('性别不能为空');
    result = false;
  }
  else if (sex !== '男' && sex !== '女') {
    // alertMsg('性别不能为非男女');
    result = false;
  }
  return result;
}

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
    // alertMsg('姓名不能为空');
    result = false;
  } else {
    var reg = /^[\u4e00-\u9fa5]{2,}$/;
    if (!reg.test(name)) {
      // alertMsg('姓名格式错误');
      result = false;
    }
  }
  return result;
}

/**
 * [checkCard 检查银行卡]
 * @method      checkCard
 * @param       {[string]}     card   [银行卡]
 * @return      {[boolean]}           [true: 格式正确 / false: 格式错误]
 * @version     [1.0]
 * @author      [潘剑]
 * @Proofreader [潘剑]
 * @datetime    2017-10-21T17:23:25+080
 */
function checkCard(card) {
  var result = true;
  if (!card) {
    alertMsg('银行卡不能为空');
    result = false;
  } else {
    var reg = /^\d{16,19}$/;
    if (!reg.test(card)) {
      alertMsg('储蓄卡格式错误');
      result = false;
    }
  }
  return result;
}