app.controller('baseController',function ($scope) {
    //配置分页控件
    $scope.paginationConf={
        currentPage: 1,
        //总记录数
        totalItems: 10,
        //每页显示的记录数
        itemsPerPage: 10,
        //选择每页显示的记录数数据
        perPageOptions: [10,20,30,40,50],
        onChange: function () {
            $scope.reloadList();
        }

    };


    //编写一个获取分页方法，不需要传递当前页码、每页记录数
    $scope.reloadList=function () {
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    }

    //定义一个数组，存储选中的数据id
    $scope.selectIds=[];

    //更新选择框
    $scope.updateSelection=function ($event,id) {
        //如果选择框被选中,把品牌id插入数组
        if($event.target.checked){

            $scope.selectIds.push(id);
        }else {
            //选择框未选中，把已经存在品牌id移除
            //获取id元素对应的索引
            var index=$scope.selectIds.indexOf(id);
            //删除指定索引位置的元素
            $scope.selectIds.splice(index,1);

        }

    }

    //编写提取json对象指定属性，返回全部的值
    $scope.jsonToString=function (jsonString, key) {
        //把json字符串转换成json对象
       var json= JSON.parse(jsonString);
       //遍历json对象，读取值
        var value="";

        for(var i=0;i<json.length;i++){
            if(i>0){
                value+=",";
            }
            value+=json[i][key];
        }

        return value;
    }

    //从集合按照key查询对象
    $scope.searchObjectByKey=function (list, key, keyValue) {
        for(var i=0;i<list.length;i++){

            if(list[i][key]==keyValue){
                return list[i];
            }
        }

        return null;
    }
})