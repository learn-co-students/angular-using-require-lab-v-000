function Tabs() {
	return {
		restrict: 'E',
	    scope: {},
	    transclude: true,
	    controller: function () {
	      this.tabs = [];

	      this.addTab = function addTab(tab) {
					this.tabs.push(tab);
				};
				
				this.selectTab = function selectTab(index) {
					for (var i = 0; i < this.tabs.length; i++) {
						this.tabs[i].selected = false;
					}
					this.tabs[index].selected = true;
				};	      
	    },
	    controllerAs: 'tabs',			
			templateUrl: 'js/app/views/tabs.html'
	}
}

angular
	.module('app')
	.directive('tabs', Tabs);