
$().ready(function() {
    if ((navigator.userAgent.match(/Chrome/)) || (navigator.userAgent.match(/Chromimum/))) {
        $('.browser-extension').addClass('btn-inverse').removeClass('disabled').attr('href', 'https://chrome.google.com/webstore/detail/dckibfapbkkgkmipdkjbpdcopejindph');
    } else if ((navigator.userAgent.match(/Safari/)) && !navigator.userAgent.match(/Mobile/)) {
        $('.browser-extension').addClass('btn-inverse').removeClass('disabled').attr('href', '/TabulaTabs.safariextz');
    } else {
        $('li.compatibility').addClass('important');
    }
});