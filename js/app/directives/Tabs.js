function Tabs() {
	return {
		restrict: 'E',
		scope: {},
		transclude: true,
		controller: function (){
			this.tabs = [];

			this.selectTab = function(index) {
        this.tabs.forEach(function(tab) {
         tab.selected = false;
        });

				this.tabs[index].selected = true;
			};
		},
		controllerAs: 'tabs',
		templateUrl: 'js/app/directives/tabsTemplate.html'
	};
}

angular
	.module('app')
	.directive('tabs', Tabs);
