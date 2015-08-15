angular.module( 'blog.articole', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'articole', {
    url: '/articole',
    views: {
      "main": {
        controller: 'ArticoleCtrl',
        templateUrl: 'articole/articole.tpl.html'
      }
    },
    data:{ pageTitle: 'Articole' }
  });
})

.controller( 'ArticoleCtrl', function ( $scope ) {

})

;
