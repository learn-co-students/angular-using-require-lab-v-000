# Using "require"

## Objectives

- Use "require" to pass another Controller into a child Directive

## Instructions

Following on from our previous README, let's make an actual tabs component and make it functional.

Using what you know about directives so far, make the `tab` component add itself to the `tabs` list of tabs. Then, display the tabs labels at the top.

Using `ng-click`, allow the user to click on the tabs label to make it swap what tab is active. Hint: change a variable in the parent controller to what tab label is active. Then, in our child tabs, use `ng-show` to check the parent controller's value against the tab's label.