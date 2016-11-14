function Tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function {
      this.tabs = [];
      this.addTab = function addTab(tab) {
        this.tabs.push(tab);
      };
      this.selectTab = function selectTab(tabIndex) {
        for (var i = 0; i < this.tabs.length; i++) {
          this.tabs[i].selected = false;
        }
        this.tabs[tabIndex].selected = true;
      };
    },
    controllerAs: 'tabs',
    link: function($scope, $element, $attrs, $ctrl) {
      $ctrl.selectTab($attrs.active || 0); 
    },
    template: [
      '<div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app')
  .directive('tabs', Tabs);