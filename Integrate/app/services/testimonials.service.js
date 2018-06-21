angular.module('MyPhoto').service('testimonialsService', function($http, $q){
    function getTestimonials() {
        var deferred = $q.defer();
        $http.get('./data/testimonials.json').then(function(success){
            return deferred.resolve(success.data);
        }, function(error){
            return deferred.reject(error);
        });

        return deferred.promise;
    }
    return {
        getTestimonials: getTestimonials
    };
});
