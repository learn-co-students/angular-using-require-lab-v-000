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
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function ($scope, $element, $attrs, $ctrl) {
        $scope.tab = {
          label: $scope.label,
          selected: false
        }
        $ctrl.addTab($scope.tab);
    }
  };
}

angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);

// See section "Creating Directives that Communicate"  of Angular Directives docs: https://docs.angularjs.org/guide/directive
// Also: https://toddmotto.com/angular-1-5-lifecycle-hooks#using-postlink
