function Tab(data) {
  var self = this;
  this.tab = data.tab;
  this.content = data.content;
  this.index = data.index;

  window.toggleTab = function (dom) {
    let id = dom.id;
    if (self.tab.indexOf(id) !== self.index) {
      self.tab.forEach(function (item, index) {
        if (item !== id) {
          $api.removeCls(item, 'active');
          $api.addCls(self.content[index], 'hide');
        }
        else {
          self.index = index;
        }
      });
      $api.addCls(id, 'active');
      $api.removeCls(self.content[self.index], 'hide');
    }
  }
}