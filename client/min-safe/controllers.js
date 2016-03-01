'use strict'

TodoController.$inject = ['$scope'];
function TodoController($scope) {
    $scope.list = [
	{text: 'Test a framework'},
	{text: 'Make some app'},
	{text: 'try something'}	
    ];

    $scope.getTotalList = function() {
	return $scope.list.length;
    };

    $scope.addElem = function() {
	if ($scope.formtext != "") {
	    $scope.list.push({
		text: $scope.formtext
	    });
	}
    }

    $scope.removeElem = function(index) {
	$scope.list.splice(index, 1);
    }
}

angular.module('app.controllerstodo', []).controller('TodoCtrl', TodoController);
