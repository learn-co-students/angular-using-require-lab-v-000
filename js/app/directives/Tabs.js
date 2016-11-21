function Tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function () {
      this.tabList = [];
      this.addTab = function(tab) {
        this.tabList.push(tab);
      };
      this.pickTab = function(index) {
        for (var i = 0; i < this.tabList.length; i++) {
          this.tabList[i].clicked = false;
        }
        this.tabList[index].clicked = true;
      };
    },
    controllerAs: 'tabs',
    link: function ($scope, $element, $attrs, $ctrl) {
      $ctrl.pickTab($attrs.active || 0);
    },
    template: [
        '<div class="tabs">',
          '<ul class="tabs__list">',
                '<li ng-repeat="tab in tabs.tabList">',
                  '<a href="" ng-bind="tab.label" ng-click="tabs.pickTab($index);"></a>',
                '</li>',
            '</ul>',
          '<div class="tabs__content" ng-transclude></div>',
        '</div>'
    ].join('')
  };
}

angular
  .module('app')
  .directive('tabs', Tabs);
