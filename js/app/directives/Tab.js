function tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    require: '^tabs',
    transclude: true,
        controller: function () {
      this.tabs = [];

      this.addTab = function (tab) {
        this.tabs.push(tab);
      };
    },
    controllerAs: 'tabs',
    template: [
      '<div class="tabs__content" ng-show="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function ($scope, $element, $attrs, $ctrl) {
        // $ctrl = { tabs: [], addTab: func(){} }
    }
  };
}

angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);
