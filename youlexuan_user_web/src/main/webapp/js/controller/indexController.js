app.controller('indexController',function ($scope, loginService) {
    //查询当前登录用户名
    $scope.showName=function () {
        loginService.showName().success(function (response) {
            $scope.loginName=response.loginName;
        })

    }
})