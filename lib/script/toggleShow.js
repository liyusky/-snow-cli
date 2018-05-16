function show (dom) {
  if ($api.hasCls(dom, 'aui-hide')) {
    $api.removeCls(dom, 'aui-hide');
  }
}

function hide (dom) {
  if (!$api.hasCls(dom, 'aui-hide')) {
    $api.addCls(dom, 'aui-hide');
  }
}

function toggleShow (dom) {
  if ($api.hasCls(dom, 'aui-hide')) {
    $api.removeCls(dom, 'aui-hide');
  }
  else {
    if (!$api.hasCls(dom, 'aui-hide')) {
      $api.addCls(dom, 'aui-hide');
    }
  }
}
