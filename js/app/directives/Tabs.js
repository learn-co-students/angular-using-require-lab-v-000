function tabs(){
  return{
    scope: {},
    transclude: true,
    controller: function () {
      this.tabs = [];
      var tabs = this.tabs;

      this.addTab = function(tab){
        if(tabs.length===0){
          tab.selected = true;
        }
        this.tabs.push(tab);
      };

      this.selectTab = function(index){
        debugger
        for(var i = 0; i < tabs.length; i++){
          debugger
          tabs[i].selected = false;
        }


        tabs[index].selected = true;
      };

    },
    controllerAs: 'tabsCtrl',
    link: function(){

    },
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabsCtrl.tabs">',
            '<a href="#" ng-bind="tab.label" ng-click="tabsCtrl.selectTab($index)"</a>',
          '</li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'  
    ].join('')
  };
}


angular
  .module('app', [])
  .directive('tabs', tabs);
