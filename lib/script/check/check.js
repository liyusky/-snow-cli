function check(params) {
  try {
    params.init();
  } catch (e) {}

  var flag = true;
  var data = params.data;
  for (var key in data) {
    var value = data[key];
    if (value instanceof Array) {
      value.map((item) => {
        evalFunction(key, item);
      });
    } else {
      evalFunction(key, value);
    }
  }

  function evalFunction(type, value) {
    type = type.substr(0, 1).toUpperCase() + type.substr(1);
    return eval(`flag = check${type}(${value}) && flag`);
  }

  if (flag) {
    try {
      params.success(flag);
    } catch (e) {}
  }
  else {
    try {
      params.fail(flag);
    } catch (e) {}
  }

  try {
    params.default(flag);
  } catch (e) {}

  return flag;
}