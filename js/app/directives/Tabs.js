angular
  .module('app')
  .directive('tabs', tabs);
  
function tabs() {
  return {
    restrict: 'E',
    scope: {}, 
    transclude: true, 
    controller: function() {
      this.tabs = [];
      
      this.addTab = function (tab) {
        this.tabs.push(tab);
      };
      this.selectTab = function(index) {
        for (var i = 0 ; i < this.tabs.length ; i++) {
          this.tabs[i].active = false;
        }
        this.tabs[index].active = true;
      };
    },
    controllerAs: 'tabs',
    template: [
      '<div class="tabs">', 
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
            '<a href="#" ng-bind="tab.label" ng-click="tabs.selectTab($index)"></a>',
          '<li>',
        '</ul>', 
        '<div class="tabs__content" ng-transclude></div>', 
      '</div>'
    ].join(''),
    link: function($scope, $element, $attrs, $ctrl) {
      $ctrl.selectTab(0);
    }
  };
}