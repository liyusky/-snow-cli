function payEntey(chat) {
  if (KeyboardData.length < 6) {
    KeyboardData += chat;
    payRender();
  }
  if (KeyboardData.length === 6) {
    model.repayment();
  }
}

function payRollback() {
  if (KeyboardData.length) {
    KeyboardData = KeyboardData.substr(0, KeyboardData.length - 1);
    payRender();
  }
}

function payRender() {
  doms.keys.forEach(function (item, index) {
    if (KeyboardData[index]) {
      item.innerText = '•';
    }
    else {
      item.innerText = '';
    }
  });
}