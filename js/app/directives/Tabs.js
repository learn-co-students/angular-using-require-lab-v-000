function tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function () {
      this.tabs = [];

      this.addTab = function (tab) {
        if(this.tabs.length===0){
          tab.selected = true;
        }
        debugger;
        this.tabs.push(tab);

      };

      var parent = this;

      this.selectTab = function(tab){
        parent.tabs.forEach(function(tabElement){
          tabElement.selected = false;
        });
        parent.tabs[tab].selected = true;
      };
    },
    controllerAs: 'tabs',
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
            '<a ng-bind="tab.label" ng-click="tabs.selectTab($index);"</a>"',
          '</li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app', [])
  .directive('tabs', tabs);
