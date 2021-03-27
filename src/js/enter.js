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