function create(data) {
  var goal = null;
  var pageParam = null;
  switch (typeof data) {
    case 'object':
      goal = data.goal;
      pageParam = data;
      break;
    case 'string':
      goal = data;
      pageParam = {
        goal: goal
      };
      break;
  }
  var animationDirection = 'from_right';
  var animationType = 'movein';
  if (Route[goal].animationDirection) animationDirection = Route[goal].animationDirection;
  if (Route[goal].animationType) animationType = Route[goal].animationType;

  alert(Route[goal].path)
  api.openWin({
    name: goal,
    url: Route[goal].path,
    vScrollBarEnabled: false,
    hScrollBarEnabled: false,
    animation: {
      type: animationType,
      subType: animationDirection,
      duration: 300
    },
    pageParam: pageParam
  });
}