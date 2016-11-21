function tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    require: '^tabs',
    transclude: true,
    link: function ($scope, $element, $attrs, $ctrl) {
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      $ctrl.addTab($scope.tab);
    },
    template: [
       '<div class="tabs__content" ng-if="tab.selected">',
         '<div ng-transclude></div>',
       '</div>'
     ].join('')
   };
 }


angular
  .module('app')
  .directive('tab', tab);
