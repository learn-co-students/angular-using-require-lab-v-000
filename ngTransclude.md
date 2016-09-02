<!-- KEY: the HTML view of X directive is inserted into the template at the element with 'ng-transclude' attribute -->

<!-- ORIGINAL -->
    <div ng-app="app" class="app">
        <!-- 'tabs' directive -->
        <tabs>
            <!-- multiple 'tab' directives -->
            <!-- each 'tab' has property label = 'Tab [ ]' string -->
            <tab label="Tab 1">
                Tab 1 contents!
            </tab>
            <tab label="Tab 2">
                Tab 2 contents!
            </tab>
            <tab label="Tab 3">
                Tab 3 contents!
            </tab>
        </tabs>
    </div>

<!-- with Tabs template -->
    <div ng-app="app" class="app">
        <!-- 'tabs' directive -->
        <tabs>
            <div class="tabs">
                <ul class="tabs__list">
                    <li ng-repeat="tab in tabs.tabs">
                        <a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>
                    </li>
                </ul>
                <div class="tabs__content" ng-transclude>
                    <!-- HTML of tabs directive here -->
                    <!-- multiple 'tab' directives -->
                    <!-- each 'tab' has property label -->
                    <tab label="Tab 1">
                        Tab 1 contents!
                    </tab>
                    <tab label="Tab 2">
                        Tab 2 contents!
                    </tab>
                    <tab label="Tab 3">
                        Tab 3 contents!
                    </tab>
                </div>
            </div>
        </tabs>
    </div>

<!-- with Tab template -->
    <div ng-app="app" class="app">
        <!-- 'tabs' directive -->
        <tabs>
            <div class="tabs">
                <ul class="tabs__list">
                    <li ng-repeat="tab in tabs.tabs">
                        <a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>
                    </li>
                </ul>
                <div class="tabs__content" ng-transclude>
                    <!-- HTML of tabs directive here -->
                    <!-- multiple 'tab' directives -->
                    <!-- each 'tab' has property label -->
                    <tab label="Tab 1">
                        Tab 1 contents!
                    </tab>
                    <tab label="Tab 2">
                        Tab 2 contents!
                    </tab>
                    <tab label="Tab 3"> 
                        <div class="tabs__content" ng-if="tab.selected">
                            <div ng-transclude>
                                <!-- HTML of tab directive in each -->
                                Tab 3 contents!
                            </div>
                        </div>   
                    </tab>
                </div>
            </div>
        </tabs>
    </div>