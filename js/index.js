var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', function($scope, $http) {

  $(document).ready(function () {
      $('.image-frame').hover(function () {
        $('.image-caption', this).slideToggle('slow');
      }, function () {
        $('.image-caption', this).slideToggle('slow');
      });

       $('#pagination-demo').twbsPagination({
        totalPages: "15",
        visiblePages: "10",
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
    });

    $('#visible-pages-example').twbsPagination({
        totalPages: 35,
        visiblePages: 10
    });

    $('.sync-pagination').twbsPagination({
        totalPages: 20,
        onPageClick: function (evt, page) {
            $('#sync-example-page-content').text('Page ' + page);
        }
    });
    });

  $http.get("json/products.json")
  .then(function(response) {
      $scope.product = response.data;
  }, function(response) {
      $scope.product = "Something went wrong";
  });

  
    
}]);