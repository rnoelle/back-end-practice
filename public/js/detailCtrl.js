angular.module('admin')
  .controller('detailCtrl', function ($scope, $stateParams, dataService) {

    if ($stateParams) {
      dataService.getProduct($stateParams.product).then(function (response) {
        console.log(response);
        $scope.product = response[0];
      });
    }



  })
