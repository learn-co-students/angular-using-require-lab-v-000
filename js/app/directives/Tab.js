function tab() {
  return {
    restrict: 'E',
    scope:{
      label: '@'
    },
    require: '^^tabs',
    transclude: true, 
    template: [
        "<div class='tabs__content' ng-transclude ng-show='selected'></div>"
      ].join(""),
    link: function ($scope, $element, $attrs, $ctrl) {
      $ctrl.addTab($scope);
    }
  };
}
 
angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);