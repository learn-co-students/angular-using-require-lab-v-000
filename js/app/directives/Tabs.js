function Tabs(){
  return{
    restrict:'E',
    scope:{},
    transclude:true,
    
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat = "tab in tabs.tabs">',
            '<a href = "", ng-bind = "tab.label" ng-click="tabs.selectTab($index)"></a>',
          '</li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '</div>'
    ].join(''),
    controller:function(){
      this.tabs = [];
      this.addTab = function addTab(tab){
        this.tabs.push(tab)
      }
      this.selectTab = function selectTab(index){
        this.tabs.forEach(function(tab){
          tab.selected = false;
        });
        this.tabs[index].selected = true;
      }
    },
    link: function ($scope, $element, $attrs, $ctrl) {
      $ctrl.selectTab($attrs.active || 0);
    },
    controllerAs:'tabs'
  }
}

angular
  .module('app')
  .directive('tabs',Tabs)