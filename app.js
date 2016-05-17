var app = angular.module('linkr', []);

app.factory('posts', [function(){
	//service body
}]);

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
			if(!$scope.title || $scope.title === '') {return;}	
			$scope.posts.push({
				title: $scope.title, 
				link: $scope.link,
				upvotes: 0
			});
			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};
}]);