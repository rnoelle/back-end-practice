angular.module('admin')
  .directive('updateButton', function ($compile) {
    return {
      restrict: 'EA',
      template: '<button type="button" ng-click="openUpdate(id)">Update</button>',
      scope: {
        id: '=',
        oldDesc: '=description'
      },
      link: function (scope, element, attr) {
        scope.openUpdate = function (id) {
            $('.product-box').find('#' + id + 'a').addClass('hidden');
            $('.product-box').find('#' + id + 'b').removeClass('hidden');
        }
      }
    };
  });
