function tabs() {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function ($log) {
      this.tabs = this.tabs || [];
      this.addTab = function (tab) {
        this.tabs.push(tab);
        this.tabs[0].selected = true;
        console.log(tab.label)
      };
      this.act = function (index)  {
        this.tabs.forEach(function(item) {
          item.selected = false;
        });
        this.tabs[index].selected = true;
      }
    },
    controllerAs: 'tabs',
    template: [
      '<div class="tabs">Tabs',
        "<ul class='tabs__list'>",
          "<li ng-repeat='tab in tabs.tabs'>",
            '<div ng-click="tabs.act($index)">',
              '{{tab.label}}',
            '</div>',
          "</li>",
        "</ul>",
        // '<ul class="tabs__list"></ul>',
        '<div ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app', [])
  .directive('tabs', tabs);

