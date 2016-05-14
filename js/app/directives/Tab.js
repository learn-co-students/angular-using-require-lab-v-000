function tab() {
  return {
    restrict: 'E',
    scope:{
      label: '@'
    },
    require: '^tabs',
    transclude: true, 
    // template: 'I am a tab! {{thing}}',
    template: [
      "<li ng-click='tab.toggle()'>{{label}}",
        "<div ng-transclude ng-show='tab.selected'></div>",
      "</li>"
      ].join(""),
    controller: function() {
      this.selected = false;
      this.toggle = function() {
        this.selected = !this.selected;
      };
    },
    controllerAs: 'tab',
    // template: `
    //   <div class="tabs__content" ng-if="tab.selected">
    //     <div ng-transclude></div>
    //   </div>
    // `,
    link: function ($scope, $element, $attrs, $ctrl) {
      $scope.thing = "fred";
      // $ctrl.al();
    }
  };
}
 
angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);