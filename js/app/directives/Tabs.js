function Tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function () {
      this.tabs = [] // set up a list so we can repeat through the tabs and display the labels

      this.addTab = function addTab(tab) {
        this.tabs.push(tab)
      }

      this.selectTab = function selectTab(index) {
        let l = this.tabs.length

        // iterates through every tab and sets selected to false
        for (var i = 0; i < l; i++) {
          this.tabs[i].selected = false
        }
        this.tabs[index].selected = true
      }
    },
    controllerAs: 'tabs',
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs">',
            '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>',
          '</li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function ($scope, $element, $attrs, $ctrl) {
      $ctrl.selectTab(0) // select a tab when loading the page
    }

  }
}

angular
  .module('app')
  .directive('tabs', Tabs)