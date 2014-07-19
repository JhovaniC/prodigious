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
                $scope.photo = $scope.photos[0];
                $scope.image = 'images/' + $scope.photo.image;
                setPreviousAndNext();
            });
    };
    getJson();

    /* Show the larger image */
    $scope.showImage = function (photo) {
        $scope.photo = photo;
        $scope.image = 'images/' + photo.image;
        setPreviousAndNext();
        $('.footer img').each(function(){
            $(this).removeClass('active');
        });
        $('img#' + photo.id).addClass('active');
    };

    /* Sets previous and next images */
    var setPreviousAndNext = function () {
        if ($scope.photo.id == '1') {
            $scope.prevPhoto = $scope.photos[5];
            $scope.nextPhoto = $scope.photos[1];
        } else if ($scope.photo.id == '6') {
            $scope.prevPhoto = $scope.photos[4];
            $scope.nextPhoto = $scope.photos[0];
        } else {
            $scope.prevPhoto = $scope.photos[parseInt($scope.photo.id) - 2];
            $scope.nextPhoto = $scope.photos[parseInt($scope.photo.id)];
        }
    };
}