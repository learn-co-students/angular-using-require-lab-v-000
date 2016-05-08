function tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    require: '^tabs',
    transclude: true, 
    template: 'I am a tab! {{thing}}',
    // template: `
    //   <div class="tabs__content" ng-if="tab.selected">
    //     <div ng-transclude></div>
    //   </div>
    // `,
    link: function ($scope, $element, $attrs) {
      $scope.thing = "fred";
    }
  };
}
 
angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);