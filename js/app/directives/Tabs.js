function Tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function() {
      this.tabs = [];
      this.addTab = function addTab(tab) {
        this.tabs.push(tab);
      };
      this.selectTab = function selectTab(tab) {
        for (var x=0; x<this.tabs.length; x++) {
          this.tabs[x].selected = false;
        }
        this.tabs[tab].selected = true;
      };
    },
    controllerAs: 'tabs',
    link: function ($scope, $element, $attrs, $ctrl) {
      $ctrl.selectTab($attrs.active || 0);
    },
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
            '<a href="" ng-bing="tab.label" ng-click="tabs.selectTab($index);"></a>',
          '</li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app')
  .directive('tabs', Tabs)
  .directive('tab', Tab);