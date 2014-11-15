buildApp.controller('ViewIssueCtrl', 
	function($scope, $route, $element, $timeout) {
  $scope.$watch(function() { return $route.current && $route.current.params.issue; },
      function(newVal, oldVal) {
    $scope.showTab = !!newVal;
    $scope.issueId = newVal;
    if ($scope.showTab) {
      $timeout(function() {
        $element.find('a').click();
      }, 0, false);      
    }
  });

   $scope.carousel = [
    { image: 'images/image1.png' },
    { image: 'images/image2.png' },
    { image: 'images/image3.png' }
  ];

}).controller('FindCtrl', function($scope, $location) {
  $scope.issues = [
    {'id': 17988, 'name': '#17988'},
    {'id': 5001, 'name': '#5001'},
    {'id': 9328, 'name': '#9328'},
    {'id': 900, 'name': '#900'},
    {'id': 10050, 'name': '#10050'},
    {'id': 11749, 'name': '#11749'}
  ];

  $scope.onSelect = function(item) {
    $location.path('/issue/' + item.id);
    $scope.find = '';
  };
});
