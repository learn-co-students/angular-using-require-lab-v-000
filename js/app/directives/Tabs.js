function Tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function() {
      this.tabs = [];

      this.addTab = function(tab) {
        this.tabs.push(tab);
      };

      this.selectTab = function(index) {
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
    templateUrl: 'js/app/directives/tabs.html'
  }
}

angular
  .module('app', [])
  .directive('tabs', Tabs);
