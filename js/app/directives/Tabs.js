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

// angular
//   .module('app')
//   .directive('tabs', tabs)

// function tabs() {
//   return {
//     restrict: 'E', //restrict to use as element
//     scope: {}, //isolated scope
//     transclude: true, //indicate that will have insertion at ng-transclude
//     controller: function() {
//       this.tabs = [];
//       //dynamically add each tab to parent directive 'tabs'
//       this.addTab = function(tab) {
//         this.tabs.push(tab);
//       };
//       //use array to add clickable behavior to select correct tab on click
//       this.selectTab = function(index) {
//         for (var i = 0; i < this.tabs.length; i++) {
//           this.tabs[i].selected = false;
//         }
//         this.tabs[index].selected = true;
//       };
//     },
//     controllerAs: 'tabs',
//     // set the active tab or first tab
//     link: function($scope, $element, $attrs, $ctrl) {
//       $ctrl.selectTab($attrs.active || 0);
//     },
//     // 'tabs_list' will hold the values of each tab.label
//     // 'tabs_content' with ng-transclude will hold the tab content
//     // add 'selectTab' to tabs controller to specify tab's index and reveal content
//     template: [
//         '<div class="tabs">',
//           '<ul class="tabs__list">',
//             '<li ng-repeat="tab in tabs.tabs">',
//             '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>',
//           '</ul>',
//         '<div class="tabs__content" ng-transclude></div>',
//         '</div>' 
//     ].join('')
//   };
// };