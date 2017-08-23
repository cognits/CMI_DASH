var config = {
    apiKey: "AIzaSyDTvoq6e7fckj5fjE2dE8OGCx4XuKOSHU8",
    authDomain: "cmi-db-33e5d.firebaseapp.com",
    databaseURL: "https://cmi-db-33e5d.firebaseio.com",
    projectId: "cmi-db-33e5d",
    storageBucket: "cmi-db-33e5d.appspot.com",
    messagingSenderId: "970565718586"
  };

var CMIFirebase = firebase.initializeApp(config);

cmi.controller("mainCtrl", function($scope, getResumen){
  $scope.resumenData = getResumen
});

cmi.controller("loginCtrl", function($scope, $state){
  $scope.verifyLogin = function functionName(pass) {
    console.log(pass);
    if (pass == "cmidash17") {
      $state.go("info");
    } else {
      swal(
        'Oops...',
        'La contraseña es incorrecta, contacta a tu administrador.',
        'error'
      )
    }
  };
})
