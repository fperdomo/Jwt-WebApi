﻿(function() {

    "use strict";

    angular
        .module("jwtWebApp")
        .service("authService",
        [
            "$http", "$window", "$q", function authService($http, $window, $q) {

                function login(user) {

                    var deferred = $q.defer();

                    $http.post("signin", user)
                        .success(function(res) {
                            deferred.resolve(res);
                        })
                        .error(function(err) {
                            deferred.reject(err);
                        });
                }

                function register(user) {

                    var deferred = $q.defer();

                    $http.post("signup", user)
                        .success(function(res) {
                            deferred.resolve(res);


                        })
                        .error(function(err) {
                            deferred.resolve(err);

                        });

                    return deferred.promise;
                }

                return {
                    login: login,
                    register: register
                };
            }
        ]);

})();