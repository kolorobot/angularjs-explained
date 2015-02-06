# Directives

No `$scope` hiding:

- Create a `carDetails` directive.
- Create a template for the directive in `directive/carDetails.html`
- Use `replace` property on a directive
- Use `CarCtrl` `$scope` to show car data

Make directive independent and reusable:

- Create `scope` attribute
- Pass car object via attribute ('=')
- Pass toDate function via attribute ('&')
- Pass currencySymbol via attribute ('@')
- Pass dateFormat via attribute ('@')

Create a controller for directive:

- Using `controller` attribute create a controller function with injected `$scope` and `CarService`
- Add a `showQuery()` function to the `$scope`
- Use the function in directive template

Change directive output during linking:

- Add link property to a directive with a function decorating car with important CSS class when `car.make` is 'Audi'