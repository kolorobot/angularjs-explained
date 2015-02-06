# Controllers and binding in expressions

Exercise 1:

- Create a new controller called `HomeCtrl` and attach it to a view.
- Add `$scope` to `HomeCtrl` and add `message` property.
- Add `HomeCtrl` to the view and reference `message` variable in the view.
- Add `toUpperCase` function that returns modified `message`. Reference function in the view.

Puzzlers:

- How to pass variable to function from the view?
- What happens if function or variable does not exist in the $scope and it was referred anyways in the view?

Exercise 2:

- Use alternative `controllerAs` syntax. What is the difference?

Exercise 3:

- Change initial `message` value with after some timeout with `$timeout`. See the changes on the page.

Puzzler:

- Why not to use standard `setTimeout`?