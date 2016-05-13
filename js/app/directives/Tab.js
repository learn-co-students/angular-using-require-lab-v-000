function Tab(){
  return {
    restrict: 'E', //restricts this directive to be used only with html elements
    scope: { //isolate scope - create a new scope with each use of this directive
      label: '@' //set variable label
    },
    require: '^tabs', //require property - inform parent (tabs)
    transclude: true, //??
    template: [ //return this html template when directive is used/invoked
      '<div class="tabs__content" ng-if="tab.selected">',
      '<div ng-transclude></div>',
      '</div>'
    ].join(''), //array of strings that is then joined
    link: function ($scope, $element, $attrs, $ctrl){
      // $ctrl = { tabs: [], addTab: func(){} }
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      $ctrl.addTab($scope.tab);
    }
  };
}

angular
  .module('app') //tell angular to use the 'app' module
  .directive('tab', Tab); //tell angular this function is a directive
