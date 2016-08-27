function Tabs(){
  return {
    restrict: "E",
    scope: {},
    transclude: true,
    controller: function(){
      this.tabs = [],
      this.tabsAdd = function(tab){
        this.tabs.push(tab);
        this.tabs[0].selected = true;
      };
      var selectedTab;

      this.selectTab = function(tab){
        //grabbing the number of the tab we selected based on its title
        selectedTab = ((tab.label).match(/\d+/)[0]);
        //now, we want that tab.selected=true, and the others =false
        for(i = 0; i < this.tabs.length; i++){
            this.tabs[i].selected = false;
          }
        this.tabs[selectedTab - 1].selected = true;
      };
    },
    controllerAs: 'ctrl',
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in ctrl.tabs" ng-click="ctrl.selectTab(tab)"> {{ tab.label }} </li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app')
  .directive('tabs', Tabs)
