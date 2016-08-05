angular.module('admin')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: './views/mainTmpl.html'
      })
      .state('product', {
        url: '/products/:product',
        templateUrl: './views/productTmpl.html',
        controller: 'detailCtrl'
      });
  })
