function Tab(){
  return {
    restrict: "E",
    scope: {
      label: "@",
      selected: "@",
    },
    transclude: true,
    require: "^tabs",
    template: [
      //ng-if is evaluating the expression - if it evaluates to true,
      //it'll show the div
      '<div class="tabs__content" ng-show="tab.selected === true">',
        '<div ng-transclude></div',
      '</div>'
    ].join(''),
    link: function($scope, $element, $attrs, $ctrl) {
      //we need to establish this object as a 'tab', then add it to our parent
      //controller's tabs array
      $scope.tab = ({
        label: $scope.label,
        selected: false,
      });
      $ctrl.tabsAdd($scope.tab);
      console.log($ctrl.tabs);
    }
  };
}

angular
  .module('app')
  .directive('tab', Tab)
  // .directive('tabs', tabs);
