<?php
    header('content-type:text/html;charset=utf-8');

    $mysql_config = array(
        'host'=>'localhost:3306',  //设置主机名和端口号
        'db_user'=>'root',         //设置数据库登录用户名
        'db_pass'=>'root',         //数据登录密码     
        'db'=>'lx.com'             //数据库名称 
    );
 
    // 链接数据库
    $mysqli= @new mysqli($mysql_config['host'],
    $mysql_config['db_user'],$mysql_config['db_pass']);

    // 判断是否有错误
    if($mysqli->connect_errno){
        die('连接错误'.$mysqli->connect_errno);
    }
    //  是指查询字符集
    $mysqli->query('set names utf8');

    // 选择数据库
    $select_db=$mysqli->select_db($mysql_config['db']);

    // 判断是否选择数据库成功
    if(!$select_db){
        die('数据库选择错误'.$mysqli->errno);
    }
?>