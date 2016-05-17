var app = angular.module('linkr', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		//Scope makes posts available in the template
		$scope.posts = [
			{title: 'post 1', upvotes: 4},
			{title: 'post 2', upvotes: 12},
			{title: 'post 3', upvotes: 1},
			{title: 'post 4', upvotes: 8},
			{title: 'post 5', upvotes: 18}
		];

		$scope.addPost = function() {
		//Scope makes posts available in the template
		$scope.posts.push({title: 'A new title', upvotes: 0});
		console.log(posts);
	}
}]);