function tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function () {
      this.activeTab = '';
      this.tabs = [];
      this.addTab = function (tab) {
        this.tabs.push(tab);
      };
      this.makeActive = function (tab) {
        this.activeTab = tab;
      }; 
    },
    controllerAs: 'tabs',
    template: [
      '<div class="tabs" >',
        '<ul class="tabs__list" ng-repeat="tab in tabs.tabs" ><div ng-click="tabs.makeActive(tab.label)">{{tab.label}}</div></ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}
 
angular
  .module('app', [])
  .directive('tabs', tabs);