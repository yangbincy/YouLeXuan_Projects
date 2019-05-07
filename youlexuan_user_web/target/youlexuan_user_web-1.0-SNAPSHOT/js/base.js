//定义模块名称,不带分页服务
var app=angular.module('youlexuan',[]);

//创建一个全局过滤器

app.filter('trustHtml',['$sce',function ($sce) {
    return function (data) {
        return $sce.trustAsHtml(data);
    }
}]);