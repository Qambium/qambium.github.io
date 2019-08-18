var qambium = angular.module('qambium', []);

qambium.directive('githubRepoLastupdate', function($http){
  return {
    restrict: 'E',
    // transclude: true,
    template : "Dernière mise à jour : {{repoLastCommitDate | dateQambium}}",//date : 'dd..yyyy'}}",
    scope: {
      repoName : '@repoName',
      // user : '=user'
    },
    link: function(scope, elem, attr) {

      $http({
        method: 'GET',
        url: 'https://api.github.com/repos/'+scope.repoName+'/commits'
      }).then(function successCallback(response) {
        if(response && response.data.length > 0){
          scope.commitCount = response.data.length;
          scope.repoLastCommitDate = response.data[0].commit.author.date;
        }
      }, function errorCallback(response) {
        console.error(response);
      });

    }
  }
});

qambium.filter('dateQambium', function($filter) {
return function(input, optional1, optional2) {

    var output;

    // Do filter work here
    var jour = $filter('date')(input, 'dd');
    var moisChiffre = $filter('date')(input, 'M');
    var annee = $filter('date')(input, 'yyyy');
    var mois = "";

    switch (parseInt(moisChiffre)) {
      case 1:
      mois = 'I';
      break;
      case 2:
      mois = 'II';
      break;
      case 3:
      mois = 'III';
      break;
      case 4:
      mois = 'IV';
      break;
      case 5:
      mois = 'V';
      break;
      case 6:
      mois = 'VI';
      break;
      case 7:
      mois = 'VII';
      break;
      case 8:
      mois = 'VIII';
      break;
      case 9:
      mois = 'IX';
      break;
      case 10:
      mois = 'X';
      break;
      case 11:
      mois = 'XI';
      break;
      case 12:
      mois = 'XII';
      break;

    }


    return jour + ' . ' + mois + ' . ' + annee;

  }

});
