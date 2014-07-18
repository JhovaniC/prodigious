/**
 * Main JS file
 */

/* Main Controller */
function mainCtrl($scope, $http) {

    /* Get json file contents */
    var getJson = function() {
        $http.get('js/gallery_json.json')
            .then(function(data) {
                $scope.album = data.data.album;
                $scope.photos = data.data.photos;
            });
    };
    getJson();

    /* Show the larger image */
    $scope.showImage = function (photo) {
        $scope.photo = photo;
        $scope.image = 'images/' + photo.image;
    };
}