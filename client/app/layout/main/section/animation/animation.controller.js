(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('AnimationController', AnimationController);

  AnimationController.$inject = ['navigationService', '$window', '$scope', '$location', '$mdMedia', '$sce',
    '$mdDialog'];

  /* @ngInject */
  function AnimationController(navigationService, $window, $scope, $location, $mdMedia, $sce,
                               $mdDialog) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'AnimationController';
    vm.navigation = navigationService;

    vm.previosWidthVideo = 0;

    vm.margin = 56;



    // alert
    var alert;
    vm.items = [1, 2, 3];

    activate();

    ////////////////

    function getWidthVideo() {
      var width = $window.innerWidth - 50;
      var height = $window.innerHeight - 80;
      width = width - 300 > height ? height : width;
      return width;
    }

    function getHeightVideo() {
      var height = $window.innerHeight - 80;
      return height;
    }

    var win = angular.element($window);
    win.bind('resize', function (e) {
      var footerHeight = angular.element(document.querySelector('#footer'))[0].offsetHeight;
      var container = angular.element(document.querySelector('#video-container'))[0];
      if(container){
        vm.margin = footerHeight;
      }
      $scope.$apply();
    })

    function changeContainerHeight(container, footerHeight){
      console.log(footerHeight);
      console.log(container.offsetHeight);
    }

    function activate() {
      var section = vm.navigation.getCurrentSectionNumber();

      if (section === 0) {
        $location.path('/');
      }

      vm.previosWidthVideo = $window.innerWidth;

      vm.screenIsSmall = $mdMedia('sm');

      var footerHeight = angular.element(document.querySelector('#footer'))[0].offsetHeight;

      vm.margin = footerHeight;

    }

    $scope.$watch(function () {
      return $mdMedia('sm');
    }, function (sm) {
      vm.screenIsSmall = sm;
    })

    vm.getWidthVideo = getWidthVideo;
    vm.getHeightVideo = getHeightVideo;

    vm.onPlayerReady = function (API) {
      vm.API = API;
      console.log('Video ready');
    };

    function videoCompleted(event) {
      //alert = $mdDialog.alert({
      //  content: 'Test your knowledge in the next section!',
      //  ok: 'Start'
      //});
      //$mdDialog
      //  .show(alert)
      //  .finally(function () {
      //    alert = undefined;
      //  });
      showDialog(event);
    }

    function showDialog($event) {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        template: '<md-dialog aria-label="List dialog">' +
        '  <md-dialog-content class = "content-dialogue">' +

        '       <span> Test your knowledge in the next section. </span>' +

        '  </md-dialog-content>' +
        '  <div class="md-actions">' +
        '    <div flex="" layout-align="center center" ng-click="closeDialog()" class="objective-button text-center button-animation"><a><span>Start practice &nbsp;</span><span aria-hidden="true" class="arrow glyphicon glyphicon-triangle-right objective-button-arrow"></span></a></div>' +
        '  </div>' +
        '</md-dialog>',
        locals: {
          items: vm.items
        },
        controller: DialogController
      });

      /* @ngInject */
      function DialogController(scope, $mdDialog, items) {
        scope.items = items;
        scope.closeDialog = function () {
          $mdDialog.hide();
          vm.navigation.goNext();
        }
      }
    }

    vm.videoCompleted = videoCompleted;


    vm.config = {
      sources: [
        {
          src: $sce.trustAsResourceUrl(vm.navigation.getCurrentAnimation()), type: 'video/mp4'
        }
      ],
      tracks: [
        {
          src: '',
          kind: 'subtitles',
          srclang: 'en',
          label: 'English',
          default: ''
        }
      ],
      theme: 'bower_components/videogular-themes-default/videogular.css',
      plugins: {
        poster: 'assets/images/cover.png'
      }
    };


  }
})();
