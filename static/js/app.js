'use strict';

var app = angular.module('travisApp', ['travisPettreyAppControllers', 'ngRoute']);

var routeConfig = function($routeProvider) {

  $routeProvider
  .otherwise({ redirectTo: '/' })

}

routeConfig.$inject = ["$routeProvider"];
app.config(routeConfig);

app.factory('HtmlService', [function () {

  var HtmlService = { 

    addRowToElement: function(baseElement, row) {
      angular.element(baseElement).append(row);
    },

    addColumnToElement: function(baseElement, column) {
      angular.element(baseElement).append(column);
    },

    createRow: function(attrsObject) {

      var row = document.createElement("row");
      for (key in attrsObject) {
        row.setAttribute(key, attrsObject[key]);
      }

      return row;
    },

    jqHideElements: function(className) {

      var elements = document.getElementsByClassName(className);
      jQuery.each(elements, function(index, element) {
        jQuery(element).hide();
      });

    },

    jqShowElements: function(className) {

      var elements = document.getElementsByClassName(className);
      jQuery.each(elements, function(index, element) {
        jQuery(element).show();
      });

    },
  };

  return HtmlService;

}]);

app.factory('OnloadService', [function () {

  var OnloadService = {
    
    setResize: function() {},

    resize: function() {
      jQuery(window).resize();
    },

  };

  return OnloadService;

}]);

    

app.run(['OnloadService', "HtmlService", function (OnloadService, HtmlService) {
    
}]);
//var app = angular.module('logosApp', ['respectRejectionAppControllers', 'ngRoute']);
///* routing configuration for production */
//var routeConfig = function($routeProvider) {
//    $routeProvider.otherwise({
//        redirectTo: '/'
//    });
//};
//
//routeConfig.$inject = ["$routeProvider"];
//app.config(routeConfig);
//
//app.factory('AngularHelperService', [function () {
//
//    var AngularHelperService = {
//        addNgInclude: function(urlPath) {
//            var ngInclude = document.createElement('div');
//            ngInclude.setAttribute('ng-include', "'path'".replace('path', urlPath));
//            document.body.appendChild(ngInclude);
//            this.compileElement(ngInclude);
//        },
//        addNgView: function() {
//            var ngView = document.createElement("ng-view");
//            document.body.appendChild(ngView);
//            this.compileElement(ngView);
//        },
//        compileElement: function(element) {
//            angular.element('body').injector().invoke(['$compile', function ($compile) {
//                var $scope = angular.element(element).scope();
//                $compile(element)($scope);
//                $scope.$apply();
//            }]);
//        },
//    };
//
//    return AngularHelperService;
//}])
//
//app.factory('FirebaseService', ['AngularHelperService', function(AngularHelperService) {
//
//    var FirebaseService = {
//        self: this,
//        loginError: false,
//        customLoginTried: null,
//        config: {
//            apiKey: "AIzaSyBsxkqcDK_fqEIf_Oja3MOod8L3YIhu4Fw",
//            authDomain: "respectrejection.firebaseapp.com",
//            databaseURL: "https://respectrejection.firebaseio.com",
//            storageBucket: "respectrejection.appspot.com",
//            messagingSenderId: "746933029039"
//        },
//        init: function() {
//            firebase.initializeApp(this.config);
//            this.authObserver();
//        },
//        login: function(provider) {
//            firebase.auth().signInWithPopup(provider).then(function(result){
//                var token = result.credential.accessToken;
//                var user = result.user;
//                location.reload();
//            }).catch(function(error) {
//                var errorCode = error.code;
//                var errorMessage = error.message;
//                var email = error.email;
//                var credential = error.credential;
//                angular.element('#login-error-msg').text(errorMessage);
//                angular.element("#login-error-email").text(email);
//                angular.element('#login-error-modal').modal();
//            });
//        },
//        logout: function() {
//            firebase.auth().signOut().then(function() {
//                location.reload();
//            }, function(error) {
//                log(error);
//            });
//        },
//        handleGoogle: function() {
//            var googleProvider = new firebase.auth.GoogleAuthProvider();
//            this.login(googleProvider);
//        },
//        handleFacebook: function() {
//            var facebookProvider = new firebase.auth.FacebookAuthProvider();
//            this.login(facebookProvider);
//        },
//        handleTwitter: function() {
//            var twitterProvider = new firebase.auth.TwitterAuthProvider();
//            this.login(twitterProvider);
//        },
//        handleGithub: function() {
//            var githubProvider = new firebase.auth.GithubAuthProvider();
//            this.login(githubProvider);
//        },
//        handleEmailPasswordSignup: function(email, password) {
//            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//                // Handle Errors here.
//                var errorCode = error.code;
//                var errorMessage = error.message;
//
//                angular.element("#error-msg-container").removeClass('hide');
//                angular.element("#error-msg").text(errorMessage);
//            });
//
//        },
//        handleEmailPasswordLogin: function(email, password) {
//            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//                // Handle Errors here.
//                var errorCode = error.code;
//                var errorMessage = error.message;
//                angular.element("#custom-login-error-container").removeClass('hide');
//                angular.element("#custom-login-error-msg").html(errorMessage);
//                self.loginError = true;
//            });
//
//            self.customLoginTried = true;
//        },
//        authObserver: function() {
//            firebase.auth().onAuthStateChanged(function(user) {
//                if (user) {
//                    if (self.loginError || ( ! self.loginError && self.customLoginTried)) {
//                        location.reload();
//                    }
//
//                    AngularHelperService.addNgInclude('logged_in_header');
//                    AngularHelperService.addNgInclude('logged_in_body');
//                    AngularHelperService.addNgView();
//
//                } else {
//                    AngularHelperService.addNgInclude('not_logged_in_header');
//                    AngularHelperService.addNgInclude('not_logged_in_body');
//                    AngularHelperService.addNgView();
//                }
//            });
//        },
//    };
//
//    return FirebaseService;
//
//}]);
//
//app.factory('StripeService', ['$http', function ($http) {
//    var StripeService = {
//        self: this,
//        setTestKey: function() {
//            Stripe.setPublishableKey('pk_test_PUtiEiTgkjiLy19nfN4aQFzv');
//        },
//        setLiveKey: function() {
//            Stripe.setPublishableKey('pk_live_YBQzKUjQx6HNKFoqouNPTlh4');
//        },
//        stripeResponseHandler: function(status, response) {
//            if (response.error) {
//                angular.element('.donate-btn').prop('disabled', false);
//                angular.element('.payment-errors').text(response.error.message);
//            } else {
//                var donationInput = document.getElementById("donation-amount");
//                var type = donationInput.type;
//                if (type !== "number") {
//                    donationInput.setAttribute("type", "number");
//                    alert("Please re-enter the donation amount");
//                    angular.element('.donate-btn').prop('disabled', false);
//                } else {
//
//                    jQuery.ajax({
//                        url: '/donate',
//                        type: 'POST',
//                        dataType: 'json',
//                        data: {
//                            token: response.id,
//                            donation_amount: angular.element("#donation-amount").val(),
//                        },
//                    })
//                    .done(function() {
//                        console.log("success");
//                    })
//                    .fail(function() {
//                        // usually occurs if the server doesnt send a response
//                    })
//                    .always(function() {
//                        console.log("complete");
//                    });
//                }
//
//            }
//        },
//        attemptPayment: function() {
//            angular.element('.donate-btn').prop('disabled', true);
//
//            Stripe.card.createToken({
//              number: angular.element('.card-number').val(),
//              cvc: angular.element('.card-cvc').val(),
//              exp_month: angular.element('.card-expiry-month').val(),
//              exp_year: angular.element('.card-expiry-year').val(),
//              address_zip: angular.element('.address_zip').val()
//            }, StripeService.stripeResponseHandler);
//
//        },
//        init: function(keyType) {
//            if (keyType === 'live') this.setLiveKey();
//            else if (keyType === 'test') this.setTestKey();
//        }
//    };
//
//    return StripeService;
//}]);
//
//app.run(['FirebaseService', 'StripeService', function (FirebaseService, StripeService) {
//    FirebaseService.init();
//    StripeService.init('test');
//}]);

/* 
useful notes 
stripe response looks like below
{
  id: "tok_u5dg20Gra", // Token identifier
  card: {...}, // Dictionary of the card used to create the token
  created: 1485482460, // Timestamp of when token was created
  currency: "usd", // Currency that the token was created in
  livemode: false, // Whether this token was created with a live API key
  object: "token", // Type of object, always "token"
  used: false // Whether this token has been used
}
*/

