function tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    require: '^tabs',
    transclude: true,
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
      };
      $ctrl.addTab($scope.tab);
    }
  };
}
 
angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);

// Using what you know about directives so far, make the tab component add itself to the tabs list of tabs. Then, display the tabs labels at the top.
// Using ng-click, allow the user to click on the tabs label to make it swap what tab is active. Hint: change a variable in the parent controller to what tab label is active. Then, in our child tabs, use ng-show to check the parent controller's value against the tab's label.