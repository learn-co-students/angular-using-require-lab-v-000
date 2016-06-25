function tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function () {
      this.tabs = [];

      this.addTab = function (tab) {
        this.tabs.push(tab);
      };
      this.selectTab = function (tab) {
        tab.select = true;
      }
    },
    controllerAs: 'tabs',
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list"></ul>',
        '<div class="tabs__content" ng-click="selectTab()" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app', [])
  .directive('tabs', tabs);
