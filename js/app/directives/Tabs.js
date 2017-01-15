angular.module('app')
  .directive('tabs', () => {
    return {
      restrict: 'E',
  		scope: {},
  		transclude: true,
  		controller: function () {
  			this.tabs = []
  			this.addTab = tab => {
  				this.tabs.push(tab)
  			}
  			this.selectTab = i => {
          this.tabs.forEach(tab => { tab.selected = false })
          this.tabs[i].selected = true
  			}
  		},
  		controllerAs: 'tabs',
  		link: ($scope, $element, $attrs, $ctrl) => {
  			$ctrl.selectTab($attrs.active || 0)
  		},
  		template:`
        <div class="tabs">
          <ul class="tabs__list">
            <li ng-repeat="tab in tabs.tabs">
              <a href="" ng-click="tabs.selectTab($index)">{{ tab.label }}</a>
            </li>
          </ul>
          <div class="tabs__content" ng-transclude></div>
        </div>
      `,
  	}
  })
