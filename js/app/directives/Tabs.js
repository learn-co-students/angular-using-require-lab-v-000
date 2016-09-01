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
    },
    // 'tabs_list' will hold the values of each tab.label
    // 'tabs_content' with ng-transclude will hold the tab content
    template: `
    <div class="tabs">
      <ul class="tabs_list"></ul>
      <div class="tabs_content" ng-transclude></div>
     </div> 
    `
  };
};