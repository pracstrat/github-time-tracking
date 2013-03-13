var div = document.createElement('div');
div.className='shepherd-timer styled';
var el = document.getElementsByClassName('number')[0];
if (!el) {
	el = document.getElementsByClassName('pull-number')[0];
	div.setAttribute('style','margin-top:8px;');
}
var href = window.location.href;
var pattern = /^https:\/\/github.com\/(.*?)\/(.*?)\/.*?(\d+)$/
var m = href.match(pattern);
div.setAttribute('data-account', JSON.stringify({'id':m[1]}));
div.setAttribute('data-project', JSON.stringify({'id':m[2]}));
div.setAttribute('data-item', JSON.stringify({'id':m[3]}));
el.appendChild(div);

var span = document.createElement("span");
span.className = 'shepherd-timer-icon';
div.appendChild(span);

// var s = document.createElement('script');
// s.type = 'text/javascript';
// s.src = "http://localhost:3000/assets/time_tracker.js";
// var ph = document.getElementsByTagName('script')[0];
// ph.parentNode.insertBefore(s, ph);
// var init = "window._harvestPlatformConfig = { 'applicationName': 'GitHub', 'permalink': 'https://github.com/%ACCOUNT_ID%/%PROJECT_ID%/%ITEM_ID%', 'referral': '66lx'}; var s = document.createElement('script');s.src = '//platform.harvestapp.com/assets/platform.js';s.async = true;var ph = document.getElementsByTagName('script')[0];ph.parentNode.insertBefore(s, ph);";
// var s = document.createElement('script');s.type = 'text/javascript';s.innerHTML = init;
// var ph = document.getElementsByTagName('script')[0];
// ph.parentNode.insertBefore(s, ph);