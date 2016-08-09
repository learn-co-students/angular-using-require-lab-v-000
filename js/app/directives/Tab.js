function tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    transclude: true,
    controller: function(){
      this.tabs = [];
    },
    require: '^tabs',
    controllerAs: "tabs",
    template: `
      <div class="tabs__content" ng-if="tab.selected">
        <div ng-transclude></div>
      </div>
    `,
    link: function ($scope, $element, $attrs) {}
  };
}

angular
  .module('app', [])
  .directive('tab', tab);
  .directive('tabs', tabs)