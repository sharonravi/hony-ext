var hony=angular.module("hony",[]);
//console.log("test");

//calls the facebook api to get image source and description
hony.controller('getSrc',function($scope, $http)
{ var json_data='';
  var json_string='';
  $http.get('http://graph.facebook.com/humansofnewyork/photos/uploaded?limit=75&fields=name,source,link').
  success(function(data, status, headers, config) {
    json1_string=JSON.stringify(data);
    json1_data=JSON.parse(json1_string);
    var photo=json1_data.data[Math.floor(Math.random() * json1_data.data.length)]
    console.log("res" + photo.name + " " + photo.source);
    $scope.psrc=photo.source;
    $scope.ptitle=photo.name;
    $scope.plink=photo.link;
  }).
  error(function(data, status, headers, config) {
     console.log("err" + data );
  });

});

