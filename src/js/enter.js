import cookie from '../js/cookie.js'
$('.login_scan_tip').on('click', function() {
    $('.login_static_tip').toggle(0, '.hide');
    $('.login_scan_tip').toggle(0, '.show');
    $('#btn-show').toggle(0, '.hide');
    $('#btn-sw').toggle(0, '.show');
    $('.poptip').toggle(0, '.show');
    $('.login-content').toggle(0, '.show');
    $('.cooperation').toggle(0, '.show');
    $('.qrcode_info').toggle(0, '.hide');
});
$('.login_static_tip').on('click', function() {
    $('.login_scan_tip').toggle(0, '.hide');
    $('.login_static_tip').toggle(0, '.show');
    $('#btn-sw').toggle(0, '.hide');
    $('#btn-show').toggle(0, '.show');
    $('.poptip').toggle(0, '.hide');
    $('.login-content').toggle(0, '.hide');
    $('.cooperation').toggle(0, '.hide');
    $('.qrcode_info').toggle(0, '.show');
});


if (document.cookie) { // 判断是否有cookie数据
    // 获得cookie数据
    let cookies = document.cookie.split('; ');

    cookies.forEach(elm => {
        let item = elm.split('=');
        switch (item[0]) {
            case 'phone':
                $('input[name="phone"]').attr('value', item[1]);
                $('#savepwd').attr('checked', 'checked');
                break;
            case 'password':
                $('input[name="password"]').attr('value', item[1]);
                break;
        }
    });
}
$('#ps').on('click', function() {
    if (this.checked) {
        document.cookie = 'phone=' + $('input[name="phone"]')[0].value;
        document.cookie = 'password=' + $('input[name="password"]')[0].value;
        $(this).attr('checked', 'checked');
    } else {
        document.cookie = 'test="";expires=-1';
        $(this).attr('checked', false);

    }
    console.log(document.cookie);
});