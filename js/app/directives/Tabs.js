function tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function () {
      this.tabs = this.tabs || [];
      this.addTab = function (tab) {
        this.tabs.push(tab);
      };

      this.activate = function (scope) {
        scope.selected = true;
        this.tabs[0].selected = false;
        this.tabs = [];
        this.tabs.push(scope);
      };
    },
    controllerAs: 'tabs',
    template: [
      '<div class="tabs">Tabs',
        '<ul class="tabs__list"></ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app', [])
  .directive('tabs', tabs);
