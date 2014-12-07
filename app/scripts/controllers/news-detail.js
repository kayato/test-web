'use strict';

/**
 * @ngdoc function
 * @name ookamiWebApp.controller:NewsDetail
 * @description
 * # NewsDetail 
 * Controller of the ookamiWebApp
 */
angular.module("ookamiWebApp")
  .controller("NewsDetailCtrl", function($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://sawa-admin.kan-wing.com/')
    .success(function (data) {
        $scope.contents = data;
        console.log(json);
    })
    .error(function (data) {
        console.log(data);
    });

/*
    $http.post(API_BASE_URL + PATH_ADD_SOCIAL,
        {
            'provider': 'twitter',
            'uid': token.user_id,
            'token': oauth.getAccessTokenKey(),
            'token_secret': oauth.getAccessTokenSecret(),
            'auth_token': localStorage.getItem(USER_AUTH_TOKEN),
        })
    .success(function (data) {
        if ('user' in data) {
            setUserProfileToLocalStrage(data);
        }
        if (callback != null) {
            callback();
        }
        browser.close();
    })
    .error(function (data) {
        networkErrorNotification();
        browser.close();
        twShareOff($scope);
        console.log(data);
    });
*/
});
