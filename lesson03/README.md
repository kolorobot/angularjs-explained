# ng-model and 2-way binding

- Add `query` variable to HomeCtrl `$scope` variable with some default value (e.g. Audi A8)
- Bind `query` variable to input (`ng-model`) in the view and use it in expression inside `h3` element
- Add `$scope.$watch` function on the `query` to visualize 2-way binding.

Puzzlers:

- Wait a minute, `ng-model`? Why not `ng-bind`?
- Can `ng-model` be assigned to a function? Try!