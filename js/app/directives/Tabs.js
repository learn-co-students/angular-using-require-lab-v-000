angular
  .module('app')
  .directive('tabs', Tabs)

function Tabs() {
  return {
    restrict: 'E', //restrict use of directive as element
    scope: {}, //set isolated scope
    transclude: true, //indicate will have insertion at ng-transclude
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
    // set active tab or default to first tab in array
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

// <div ng-app="app" class="app ng-scope">
//   <tabs class="ng-isolate-scope">
    
//     <div class="tabs">
      
//       <ul class="tabs__list">
//         <li ng-repeat="tab in tabs.tabs" class="ng-scope">
//           <a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);" class="ng-binding">Tab 1</a>
//         </li>
//         <li ng-repeat="tab in tabs.tabs" class="ng-scope">
//           <a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);" class="ng-binding">Tab 2</a>
//         </li>
//         <li ng-repeat="tab in tabs.tabs" class="ng-scope">
//           <a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);" class="ng-binding">Tab 3</a>
//         </li>
//       </ul>
    
//     <div class="tabs__content" ng-transclude="">
      
//       <tab label="Tab 1" class="ng-scope ng-isolate-scope">
//       </tab>
//       <tab label="Tab 2" class="ng-scope ng-isolate-scope">
//       </tab>
//         <tab label="Tab 3" class="ng-scope ng-isolate-scope">
//           <div class="tabs__content ng-scope" ng-if="tab.selected">
//             <div ng-transclude="">
//               <span class="ng-scope">
//                 Tab 3 contents!
//               </span>
//             </div>
//           </div>
//         </tab>
      
//       </div>
//     </div>
//   </tabs>
// </div>