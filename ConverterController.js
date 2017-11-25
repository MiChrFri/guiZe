var app = angular.module("app", []);
app.controller("ConverterController", function($scope, $sce, $timeout) {
	$scope.input = "```swift \nprint('hello world');\nalert(s);";
	$scope.tags = null;

	$scope.convertMarkdown = function () {
			var code = $scope.input;
			const regex = /(```)\S+\s*/g;
			const matches = code.match(regex);

			for (var i = 0; i < matches.length; i++) {
				var language = matches[i].replace('```', '');

				var openingTag = '<pre><code class="' + language + '">';
				code = code.replace(matches[i], openingTag);

				var closingTag = '</pre></code>';
				code = code.replace('```', closingTag);
			}

			code = $sce.trustAsHtml(code);
			$scope.tags = code;

			$timeout(function(){
 				console.log("Running after the digest cycle");
 				reload();
			},0,false);
	}

	$scope.newLine = function () {
		$scope.foo += "\n";
	}
});