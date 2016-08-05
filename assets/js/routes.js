(function() {
  'use strict';

  angular.module('steps', ['ui.router', 'ngAnimate'])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'views/step-1.html'
      })
      .state('step-1', {
        url: '/step-1',
        data: {
          step: 1
        },
        templateUrl: 'views/step-1.html'
      })
      .state('step-2', {
        url: '/step-2',
        data: {
          step: 2
        },
        templateUrl: 'views/step-2.html'
      })
      .state('step-3', {
        url: '/step-3',
        data: {
          step: 3
        },
        templateUrl: 'views/step-3.html'
      });
  })

  .controller('directionController', function($scope, $element, $document, $animate) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

      var slider = $('.slider-items');
      if (typeof fromState.data === 'undefined') {
        $animate.enabled(false);
        return;
      } else {
        $animate.enabled(true);
      }

      var from = fromState.data.step;
      var to = toState.data.step;
      slider.removeClass('no-animate');
      if (from > to) {
        $scope.back = true;
        slider.addClass('back');
      } else {
        $scope.back = false;
        slider.removeClass('back');
      }
    });





  });

})();
