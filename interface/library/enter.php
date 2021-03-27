<?php
    include('./constor.php');
    $phone=$_REQUEST['phone'];
    $password=$_REQUEST['password'];

    $select = "select *from username where phone ='$phone' and password='$password'";

    $result = $mysqli->query($select);

    $mysqli->close();

    if($result->num_rows>0){
        echo '<script>alert("登录成功");</script>';
        echo '<script>location.href="../../src/html/index.html";</script>';
    }else{
        echo '<script>alert("登录失败");</script>';
        echo '<script>location.href="../../src/html/enter.html";</script>';
    }
?>