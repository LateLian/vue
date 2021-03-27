function code_draw() {
    var canvas_width = $('#canvas').width();
    var canvas_height = $('#canvas').height();
    var canvas = document.getElementById("canvas"); //获取到canvas的对象，演员
    var context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0"; //取值范围
    var aCode = sCode.split(",");
    var aLength = aCode.length; //获取到数组的长度
    var value = [];
    for (var i = 0; i <= 3; i++) {
        var j = Math.floor(Math.random() * aLength); //获取到随机的索引值
        var deg = Math.random() * 30 * Math.PI / 180; //产生0~30之间的随机弧度
        var txt = aCode[j]; //得到随机的一个内容
        value[i] = txt.toLowerCase();
        var x = 10 + i * 20; //文字在canvas上的x坐标
        var y = 20 + Math.random() * 8; //文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = code_randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
    }
    // 将生成的值以属性的方法添加到元素
    value = value.join("");
    $('#canvas').attr('data-code', value)
        //验证码上显示线条
    for (var i = 0; i <= 5; i++) {
        context.strokeStyle = code_randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    //验证码上显示小点
    for (var i = 0; i <= 30; i++) {
        context.strokeStyle = code_randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}

function code_randomColor() { //得到随机的颜色值
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

$(function() {
    code_draw();
    // 点击后刷新验证码
    $("#canvas").on('click', function() {
        code_draw();
    })

    $(".input-val").on('blur', function() {
        // 将输入的内容转为大写，可通过这步进行大小写验证
        var val = $(".input-val").val().toLowerCase();
        // 获取生成验证码值
        var num = $('#canvas').attr('data-code');
        if (val == '') {
            $('.inp-text').html('请输入验证码！');
            alert("请输入验证码！");
        } else if (val == num) {
            $('.inp-text').html('验证码正确！');
            // alert('提交成功！');
            // $(".input-val").val('');
            // draw(show_num);

        } else {
            $('.inp-text').html('验证码错误！请重新输入！');
            alert('验证码错误！请重新输入！');
            // $(".input-val").val('');

            // draw(show_num);
        }
    })
})



// function SendForm() {
//     if (CheckPost()) {
//         let phone = document.addForm.phone.value;
//         console.log(phone);
//         location.href = "../interface/library/enter.php";
//     }
// }

// function CheckPost() {
//     // $('#jq22-btn-reg').on('click', function() {
//     var val = $(".input-val").val().toLowerCase();
//     // 获取生成验证码值
//     var num = $('#canvas').attr('data-code');
//     if (val == '') {
//         $('.inp-text').html('请输入验证码！');
//         alert("请输入验证码！");
//         return false;
//     }
//     // if (val == num) {
//     //     $('.inp-text').html('验证码正确！');
//     // alert('提交成功！');
//     // $(".input-val").val('');
//     // draw(show_num);

//     // }
//     if (val != num) {
//         $('.inp-text').html('验证码错误！请重新输入！');
//         alert('验证码错误！请重新输入！');
//         // $(".input-val").val('');
//         return false;
//         // draw(show_num);
//     }
//     return true;
//     // });
// };

// $("#jq22-btn-reg").click(function() {
//     // if (!verifyCheck._click()) return;


// });