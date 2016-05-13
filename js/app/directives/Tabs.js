function Tabs(){
  return {
    restrict: 'E', //restricts this directive to be used only with html elements
    scope: {}, //isolate scope - create a new scope with each use of this directive
    transclude: true, //??
    controller: function(){ //create a controller for this directive
      this.tabs = [];

      this.addTab = function (tab){
        this.tabs.push(tab);
      };

      this.selectTab = function selectTab(index) {
        for (var i = 0; i < this.tabs.length; i++) {
          this.tabs[i].selected = false;
        }
        this.tabs[index].selected = true;
      };
    },
    controllerAs: 'tabs', //refer to the controller as 'tabs'
    link: function ($scope, $element, $attrs, $ctrl) {
      $ctrl.selectTab($attrs.active || 0);
    },
    template: [ //return this html template when directive is used/invoked
      '<div class="tabs">',
      '<ul class="tabs__list">',
      '<li ng-repeat="tab in tabs.tabs">',
      '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>',
      '</li>',
      '</ul>',
      '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('') //array of strings that is then joined
  };
}

angular
  .module('app') //tell angular to use the 'app' module
  .directive('tabs', Tabs); //tell angular this function is a directive
