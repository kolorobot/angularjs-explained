#  Dependency Injection, Services and Factories

Exercise 1:

- Inject `$log` and `$filter` to `HomeCtrl`
- What happens if we run minification of the module? Checkout with http://jscompress.com
- Improve the dependency injection syntax so it is resistant to minification

Alternative:
- Use `$injector` directly to simplify the syntax even further

Exercise 2:

- Create a `CarService` service that holds `query` variable so it is shared
- Move logic (along with dependencies) to `CarService`
- Use `.service` recipe to create a service and then inject it
- Use `.factory` recipe to create a service and then inject it
- Assign `query` from service directly to `$scope.query`

Puzzler:

- How many instances of a given service are created?


Exercise 3:

- Add a submit button with `ng-click`. Clicking should just `log.console' something

Puzzler:

- What is the difference between `ng-click` on a button and `ng-submit` on the form?


