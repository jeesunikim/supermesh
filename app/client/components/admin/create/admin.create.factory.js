(function(){

    angular
        .module('sm.adminCreate')
        .factory('AdminFactory', AdminFactory);

    AdminFactory.$inject = ['Upload','FIREBASE_URI'];


    function AdminFactory(Upload){

        function uploadImg(file){
            console.log(file, "factory")
            return Upload.upload({
                url:"/api/upload/image",
                file:file
            })
        };

        return {
            uploadImg: uploadImg
        }

    }

})();