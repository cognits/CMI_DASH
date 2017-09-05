// ********* Services to Firebase **********
cmi.factory('getResumen', ['$firebaseObject', function($firebaseObject) {
  var ref = CMIFirebase.database().ref('Resumen/-KsedSOU2NE8iQht8iU6');
	return $firebaseObject(ref);
}]);
