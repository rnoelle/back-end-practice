angular.module('admin')
  .service('dataService', function ($http) {
    this.getProducts = function () {
      return $http({
        method: 'GET',
        url: '/products'
      }).then(function (response) {
        return response.data;
      })
    }
    this.getProduct = function (id) {
      return $http({
        method: 'GET',
        url: 'products/' + id
      }).then(function (response) {
        return response.data;
      })
    }
    this.addProduct = function (name, price, description, url) {
      return $http({
        method: 'POST',
        url: '/products',
        data: {
          "name": name,
          "price": price,
          "description": description,
          "image_url": url
        }
      }).then(function (response) {
        return response;
      })
    }
    this.updateProduct = function (id, description) {
      return $http({
        method: 'PUT',
        url: '/products',
        data: {
          "id": id,
          "description": description
        }
      }).then(function (response) {
        return response;
      })
    }
    this.deleteProduct = function (id) {
      return $http({
        method: 'DELETE',
        url: '/products/' + id
      }).then(function (response) {
        return response;
      })
    }
  })
