function kill(goal) {
  goal = goal ? goal : api.pageParam.goal;
  var type = 'reveal';
  var subType = 'from_left';
  var param = Route ? Route[goal].kill : false;
  if (param) {
    if (param.type) type = param.type;
    if (param.subType) type = param.subType;
  }
  
  api.closeWin({
    name: goal,
    animation: {
      type: type,
      subType: subType,
      duration: 300
    }
  });

}