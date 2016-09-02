angular
  .module('app')
  .directive('tab', Tab)

function Tab() {
  return {
    restrict: 'E', //restrict to use as element
    scope: {
      label: '@' //in each tab directive, look for 'label' attr and one-way bind to string literal
    },
    require: '^tabs', //require tabs directive, gain access to its controller
    transclude: true, //indicate will have insertion at ng-transclude
    template:
    `
      <div class="tabs__content" ng-if="tab.selected">
        <div ng-transclude></div>
      </div>
    `,
    link: function($scope, $element, $attrs, $ctrl) {
      $scope.tab = { //in scope of each tab, set properties
        label: $scope.label, //set label equal to value of bound label attr
        selected: false //set initial value of selected to false
      };
      $ctrl.addTab($scope.tab); //for each tab directive, call addTab method from tabs controller
    }
  };
};

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