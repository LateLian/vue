<?php
    include('./constor.php');

    $phone =$_REQUEST['phone'];
    $password=$_REQUEST['password'];

    //查看数据是否在数据库中
    $sql="select * from username where phone='$phone'";

    // 执行查询   获得结果
    $result =$mysqli->query($sql);

    if($result->num_rows>0){
        echo '<script>alert("请输入自己的手机号")</script>';
        echo '<script>location.href="../../src/html/register.html";</script>';
        $mysqli->close();  //关闭数据库链接
        die();  //终止代码
    }

    // 拼接诗句插入语句
    $insert = "insert into username (phone,password) values('$phone','$password')";
  
    // 执行插入操作  插入操作返回一个布尔值
    $res = $mysqli->query($insert);
    $mysqli->close();

    if($res){
        echo '<script>alert("注册成功")</script>';
        echo '<script>location.href="../../src/html/enter.html";</script>';
    }else{
        echo '<script>alert("注册失败")</script>';
        echo '<script>location.href="../../src/html/register.html";</script>';
    }
?>