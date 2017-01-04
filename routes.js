// Routes
projectApp.config(function ($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl:'pages/home.htm',
        controller:'secondController'  
    })
    .when('/about',{
        templateUrl:'pages/about.htm',
        controller:'secondController'
    })
    
     .when('/contact',{
        templateUrl:'pages/contact.htm',
        controller:'secondController'
    })
});
