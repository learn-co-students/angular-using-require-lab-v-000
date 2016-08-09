function tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function(){
      this.tabs = [];
    },
    controllerAs: "tabs",
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list"></ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app', [])
  .directive('tabs', tabs);