angular.module('routeApp')

.config(function($routeProvider, $locationProvider) {

    //ng-route gives us access to service to create client-side routes; $routeProvider is a dependency
    $routeProvider.when('/home', {
        //what should you fill in screen bubble; should be a string that poitnss to templated html; templates/ or partials/
        templateUrl: 'views/home.html'
    }).when('/frank', {
        templateUrl: 'views/frank.html'
    }).when('/claire', {
        templateUrl: 'views/claire.html'
    }).when('/doug', {
        templateUrl: 'views/doug.html'
    })
     .otherwise({
        redirectTo: "/home"  //this shouldn't be full path name
     });




$locationProvider.html5Mode(true); //allow us to have our links look normal instead of fragments (no #) i.e. /home; remember to include <base href = '/'>
}); //end of .config; when method returns route provider object so we can keep chaining
