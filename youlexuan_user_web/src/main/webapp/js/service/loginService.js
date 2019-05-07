app.service('loginService',function ($http) {

    //读取获取当前用户名
    this.showName=function () {
        return $http.get('../login/showname.do')
    }
})