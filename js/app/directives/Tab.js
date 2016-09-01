angular
  .module('app')
  .directive('tab', Tab)

function Tab() {
  return {
    restrict: 'E', //restrict to use as element
    scope: {
      label: '@' //in each tab directive, look for 'label' attr and use string literal value
    },
    require: '^tabs', //communicate and get access to tabs directive and controller
    transclude: true, //indicate that will have insertion at ng-transclude
    // 'tabs_content' with ng-transclude will hold the tab content
    template: `
    <div class="tabs_content" ng-if="tab.selected">
      <div ng-transclude></div>
    </div>
    `,
    link: function($scope, $element, $attrs, $ctrl) {

    }
  };
};