// Routes
projectApp.config(function ($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl:'pages/home.htm',
        controller:'mainController'  
    })
    .when('/about',{
        templateUrl:'pages/about.htm',
        controller:'mainController'
    })
    
     .when('/contact',{
        templateUrl:'pages/contact.htm',
        controller:'mainController'
    })
});
