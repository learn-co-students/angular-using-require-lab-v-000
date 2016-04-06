function tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    templateUrl: '/js/app/views/tabs.html',
    bindtoController: true,
    controllerAs: 'tabs',
    controller: function () {
      var self = this
      self.tabset = [];
  
      self.addTab = function addTab(tab){
        self.tabset.push(tab)

        if(this.tabset.length === 1){
          tab.active = true
        }
      }
      this.select = function(selectedTab){
        angular.forEach(self.tabset, function(tab){
          if(tab.active && tab !== selectedTab){
            tab.active = false;
          }
        })
        selectedTab.active = true;
      }
    }
  };
}
 
angular
  .module('app', [])
  .directive('tabs', tabs);