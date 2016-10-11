function tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function () {
      this.tabs      = [];

      this.addTab    = function (tab) {
        this.tabs.push(tab);
      };
      // selectTab function turning all tabs not selected false and selected true
      this.selectTab = function (index) {
        for (var i = 0; i < this.tabs.length; i++) {
          this.tabs[i].selected = false;
        }
        this.tabs[index].selected = true;
      };
    },
    controllerAs: 'tabs',
    link: function ($scope, $element, $attrs, $ctrl) {
      $ctrl.selectTab($attrs.active || 0);
    },
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
        '<li ng-repeat="tab in tabs.tabs">',
        '<button ng-bind="tab.label" ng-click="tabs.selectTab($index);">Activate</button>',
        '</li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}
 
angular
  .module('app', [])
  .directive('tabs', tabs);