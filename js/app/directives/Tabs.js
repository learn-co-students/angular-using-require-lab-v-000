angular
  .module('app')
  .directive('tabs', Tabs)

function Tabs() {
  return {
    restrict: 'E', //restrict use of directive as element
    scope: {}, //set isolated scope
    transclude: true, //set as wrapper to recieve another directive
    controller: function() {
      this.tabs = []; //array to hold tabs
      this.addTab = function(tab) { //function to add tabs to array
        this.tabs.push(tab);
      };
      this.selectTab = function(index) {
        for(var i = 0; i < this.tabs.length; i++) {
          this.tabs[i].selected = false;
        }
        this.tabs[index].selected = true;
      };
    },
    controllerAs: 'tabs',
    link: function($scope, $element, $attrs, $ctrl) {
      $ctrl.selectTab($attrs.active || 0);
    },
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
          '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>',
        '</ul>',
      '<div class="tabs__content" ng-transclude></div>',
      '</div>' 
    ].join('')
  };
};