angular.module('admin')
  .controller('productCtrl', function ($scope, $stateParams, dataService) {
      function getProducts() {
        dataService.getProducts().then(function (response) {
          $scope.products = response;
        });
      }
      getProducts();
    

      $scope.addProduct = function (name, price, description, url) {
        dataService.addProduct(name, price, description, url).then(function (response) {
          getProducts();
        });
      };

      $scope.updateProduct = function (id, description) {
        dataService.updateProduct(id, description).then(function (response) {
          getProducts();
        });
      };

      $scope.deleteProduct = function (id) {
        console.log('controlled');
        dataService.deleteProduct(id).then(function (response) {
          console.log(response, 'from service');
          getProducts();
        })
      }
  })
