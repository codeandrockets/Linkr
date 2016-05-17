var app = angular.module('linkr', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		//Scope makes posts available in the template
		$scope.posts = [
			'Post 1',
			'Post 2',
			'Post 3',
			'Post 4',
			'Post 5'
		];
}]);