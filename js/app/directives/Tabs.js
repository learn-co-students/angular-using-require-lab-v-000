function Tabs() {
  return {
    retrict: 'E',
    scope:{},
    transclude: true,
    controller: function () {
      this.tabs = [];
      this.addTab = function (tab) {
        this.tabs.push(tab);
      };
      this.swapTab = function(index) {
        this.tabs.forEach(function(tab) {
          tab.selected = false
        })
          this.tabs[index].selected = true
      }
    },
    link: function ($scope, $element, $attrs, $ctrl) {
     $ctrl.swapTab($attrs.active || 0);
   },
    controllerAs: 'tabs',
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
            '<a href="" ng-bind="tab.label" ng-click="tabs.swapTab($index)"></a>',
          '</li>',
        '</ul>',
      '<div class="tabs_content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app')
  .directive('tabs', Tabs);
