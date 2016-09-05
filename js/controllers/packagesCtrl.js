angular.module('devmtnTravel').controller('packagesCtrl',function($scope, mainSrv, $stateParams){

    $scope.info = mainSrv.getImage();
    var array = mainSrv.getImage();

    for (var i = 0; i < array.length; i++) {
      for (var key in array[i]) {
        if ($stateParams.id == array[i][key]) {
          $scope.background = {
            "background": "url(" + array[i].image +")"
          };
        }
      }
    }

  });
