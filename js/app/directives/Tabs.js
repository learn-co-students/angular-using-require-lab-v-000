angular
  .module('app')
  .directive('tabs', tabs)

function tabs() {
  return {
    restrict: 'E', //restrict to use as element
    scope: {}, //isolated scope
    transclude: true, //indicate that will have insertion at ng-transclude
    controller: function() {
      this.tabs = [];
      //dynamically add each tab to parent directive 'tabs'
      this.addTab = function(tab) {
        this.tabs.push(tab);
      };
      //use array to add clickable behavior to select correct tab on click
      this.selectTab = function selectTab(index) {
        for (var i; i < this.tabs.length; i++) {
          this.tabs[i].selected = false;
        }
        this.tabs[index].selected = true;
      };
    },
    controllerAs: 'tabs',
    // set first tab to show first
    link: function($scope, $element, $attrs, $ctrl) {
      $ctrl.selectTab(0);
    },
    // 'tabs_list' will hold the values of each tab.label
    // 'tabs_content' with ng-transclude will hold the tab content
    // add 'selectTab' to tabs controller to specify tab's index and reveal content
    template: `
    <div class="tabs">
      <ul class="tabs_list">
        <li ng-repeat="tab in tabs.tabs">
          <a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>
        </li>
      </ul>
      <div class="tabs_content" ng-transclude></div>
     </div> 
    `
  };
};