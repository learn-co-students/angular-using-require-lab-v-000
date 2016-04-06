function tab(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<div ng-show="active" ng-transclude></div>',
    require: '^tabs',
    scope: {
      label: '@'
    },
      link: function (scope, element, attr, tabsCtrl) {
        scope.active = false
        tabsCtrl.addTab(scope)
      }
  };
}

angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);