'use strict';

var app = angular.module('logosApp', ['logosAppControllers', 'ngRoute']);

var routeConfig = function($routeProvider) {

  $routeProvider
  .when('/home', {
    templateUrl: '/home',
    controller: 'HomeCtrl'
  })

  .when('/portfolio', {
    templateUrl: '/portfolio',
    controller: 'PortfolioCtrl'
  })

  .when('/meet_the_team', {
    templateUrl: '/meet',
    controller: 'MeetCtrl'
  })

  .when('/testimonials', {
    templateUrl: '/testimonials',
    controller: 'TestimonialsCtrl'
  })

  .when('/design', {
    templateUrl: '/design',
    controller: 'DesignCtrl'
  })

  .when('/marketing', {
    templateUrl: '/marketing',
    controller: 'MarketingCtrl'
  })

  .when('/services', {
    templateUrl: '/services',
    controller: 'ServicesCtrl'
  })

  .otherwise({
    redirectTo: "/home"
  });
}

routeConfig.$inject = ["$routeProvider"];
app.config(routeConfig);

app.factory("WelcomeScreenService", [function() {
    var WelcomeScreenService = {
        self: this,
        screenDisplay: function() {

            var welcomeBtns = document.getElementsByClassName("welcome-buttons");
            jQuery.each(welcomeBtns, function(index, element) {
              jQuery(element).hide();
            });
            
            var l = document.getElementById("l");
            l.innerHTML = "<h1 class='l'>L<span class='rest' id='rest1'></span></h1>";
            jQuery(l).hide();
            this.fade(l, 3000);

            var m = document.getElementById("m");
            m.innerHTML = "<h1 class='m'>M<span class='rest' id='rest2'></span></h1>";
            jQuery(m).hide();
            this.fade(m, 4500);

            var g = document.getElementById("g");
            g.innerHTML = "<h1 class='g'>G<span class='rest' id='rest3'></span></h1>";
            jQuery(g).hide();
            this.fade(g, 6000, function() {
              var rest = document.getElementsByClassName("rest");
              var strings_to_populate = ["ogos", "edia", "roup"];

              var counter = 500;
              for (var i = 0; i < rest.length; i++) {
                var ce = rest[i];
                var string = strings_to_populate[i];
                for (var j = 0; j < string.length; j++) {
                  (function(element, letter, c) {
                    window.setTimeout(function() {
                        var new_element = document.createElement("span");
                        new_element.innerHTML = letter;
                        element.appendChild(new_element);
                        jQuery(new_element).hide();
                        jQuery(new_element).fadeIn(500, function(){});
                        if (letter === "p") {
                          // jQuery('.l').fadeOut(1000);
                          // jQuery('.m').fadeOut(2000);
                          // jQuery('.g').fadeOut(3000, function() {
                          //   // jQuery('.l, .m, .g').remove();
                            // jQuery("#lmg-row").removeClass("hidden");

                          // });

                          for (var i = 0, len=rest.length; i < len; i++) {
                            (function(count, elem) {
                              jQuery(elem).fadeOut(count, function() {
                                
                              });
                            })((i + 1)*450, rest[i]);
                          };

                          jQuery.each(welcomeBtns, function(i, v) {
                            var thirdCounter = "7500";
                            jQuery(v).fadeIn(thirdCounter, function() {
                              
                            });
                          })
                        }
                    }, c)
                  })(ce, string[j], counter);
                  counter += 200;
                }
              }
            });
        },
        fade: function(element, duration, cb) {
            jQuery(element).fadeIn(duration, function() {
              if (cb) {
                cb();
              }
            });
        }

    };

    return WelcomeScreenService;

}]);

app.factory('HtmlService', [function () {
  var HtmlService = { 
    addRowToElement: function(baseElement) {
      angular.element(baseElement).append("<div class='row'></div>");
    },
    addColumnToElement: function(baseElement, columnSize) {
      angular.element(baseElement).append("<div class='col-md-cs'></div>".replace("cs", columnSize));
    },
    hideElements: function(className) {
      var elements = document.getElementsByClassName(className);
      $.each(elements, function(index, element) {
        jQuery(element).hide();
      });
    },
  };

  return HtmlService;
}]);

app.factory('OnloadService', [function () {

  var OnloadService = {
    
    setResize: function() {
      var currentWindowWidth;
      var currentWindowHeight;
      
      jQuery(window).resize(function(event) {        
        currentWindowWidth = jQuery(window).width();
        currentWindowHeight = jQuery(window).height();

        // if (jQuery("#navbar").hasClass('in')) {
        //   jQuery("#ngview-container").css('marginTop', '400px');
        // } else {
        //   jQuery("#ngview-container").css('marginTop', '50px');
        // }

        if (currentWindowWidth >= 767 && currentWindowWidth <= 816) {
          
          jQuery("#middle-header-nav").css({
            position: 'absolute',
            right: '20px',
          });
        
        } else {
          jQuery("#middle-header-nav").css({
            position: 'relative',
            right: '0',
          });
        }

        if (currentWindowWidth > 767 && currentWindowWidth < 991) {
          jQuery("#header-container").removeClass("container").addClass('container-fluid');

        } else {
          jQuery("#header-container").removeClass("container-fluid").addClass('container');
        }
      });
    },

    resize: function() {

      jQuery(window).resize();

    },

    setNavScroll: function() {

      var bottomElementOfNav = jQuery("#link-nav-menu li a").last()[0];
      var testimonialsLink = document.getElementById("testimonials-link");
      var logosHeaderText = document.getElementById("header-text-nav");
      var socialNetworkBar = document.getElementById("middle-header-nav");

      testimonialsLink.onmouseover = function() {
        bottomElementOfNav.scrollIntoView();
      }

      socialNetworkBar.onmouseover = function() {
        logosHeaderText.scrollIntoView();
      };

    },

    setCollapseOnclick: function() {
      var menuBtn = document.getElementById("navbar-collapse-btn");
      var ngviewContainer = document.getElementById("ngview-container");
      var lastMarginTop;

      menuBtn.onclick = function() {
        var currentWindowWidth = jQuery(window).width();

        // if (jQuery("#navbar").hasClass('in') && currentWindowWidth <= 767)
        //   jQuery("#ngview-container").addClass('c-four');

        // if (currentWindowWidth <= 781 && currentWindowWidth >= 768) {
        //   jQuery("#ngview-container").addClass('c-three');
        // } else if (currentWindowWidth >= 782) {
        //   jQuery("#ngview-container").addClass('c-two');
        // } else if (currentWindowWidth <= 767) {
        //   jQuery("#ngview-container").addClass('c-one');
        // }

        if (ngviewContainer.style.marginTop === "450px") {
          window.setTimeout(function() {
            jQuery("#ngview-container").css("marginTop", "90px");
          }, 300)
        } else if (ngviewContainer.style.marginTop === "90px" || ngviewContainer.style.marginTop === "") {
            jQuery("#ngview-container").css("marginTop", "450px");
        }
      }
    }
  }

  return OnloadService;

}]);

app.run(['WelcomeScreenService', 'OnloadService', function (WelcomeScreenService, OnloadService) {
    
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

