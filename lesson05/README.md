# ngRoute and $http service

Adding routing:

- Add dependency to `ngRoute` module script
- Investigate source code and see which services can be used
- Add `ngRoute` to the module definition
- Using `config` function and injected `$routeProvider` defines two routes: `/` and `/cars`
- Extract view to `pages/home.html` and use `ng-view` directive from `ngRoute` module
- Add another view: `pages/cars.html`. Modify the menu in `index.html` to point to new route
- Create `CarCtrl` with `CarService` injected
- Add `query` to `CarCtrl` `$scope` to display it in the cars view

Modifying `CarService`:

- Add `$http` dependency on the service
- Create a method to return a promise of returning car objects from `data/cars.json`

`CarCtrl` and cars view:

- Show cars in `pages/cars.html`. Use `ng-repeat` directive
- Use `currency` filter on car price
- Use `toDate` function in `$scope` to convert timestamp to date in the view
- Use `date` filter to show formatted date (e.g. 'yyyy-MM-dd HH:mm')


`$location` service:

- Modify `HomeCtrl` to redirect to cars view using `$location` service. Use `ng-submit` on a form