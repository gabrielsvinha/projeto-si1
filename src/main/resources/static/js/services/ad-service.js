(function() {
    'use strict';

    app.service('AdService', AdService);

    AdService.$inject = ['$http', 'UserService'];

    function AdService($http, UserService) {
        var self = this;

        this.getAll = function() {
            return $http.get('/api/ad/')
                .then(response => response.data);
        };

        this.createAd = function(ad) {
            return UserService.getUser()
                .then(function(user) {
                    ad.user = user.user_id;
                    return ad;
                })
                .then(function(ad) {
                    return $http.post('/api/ad/new', ad);
                })
                .then(response => response.entity);
        };
    }
})();