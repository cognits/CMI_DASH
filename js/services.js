// ********* Services to Firebase **********
cmi.factory('getResumen', ['$firebaseObject', function($firebaseObject) {
  var ref = CMIFirebase.database().ref('Resumen');
	return $firebaseObject(ref);
}]);
