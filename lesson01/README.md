# Bootstrapping the application

- Create `app.js` and import it in the `index.html`
- Add new AngularJS module called `starterApp` to the file. No controllers at this stage.
- Add reference to the app in the `index.html` (`ng-app`)
- Add simple expression to the body of the document:

    {{ 'Hello, World!, 2 * 71 is ' + (2 * 71) }}

Puzzlers:

- Can a global function be used in AngularJS expression? Create a global function and use it in expression `{{ fn() }}`
- How to make the expression return uppercase string?
- How to get rid of flickering of {{}}?
