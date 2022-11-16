/** viewport設定処理
---------------------------------------------------------------------------------*/
function updateMetaViewport(){
	if ((screen.width >= 640) && (screen.width < 1240)) {
		viewportContent = "width=1280,user-scalable=no";
	}else{
		viewportContent = "width=device-width,user-scalable=no";
	}
	document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
}
// イベントハンドラ登録
window.addEventListener("resize", updateMetaViewport, false);
window.addEventListener("orientationchange", updateMetaViewport, false);
// 初回イベント強制発動
var ev = document.createEvent("UIEvent");
ev.initEvent("resize", true, true)
window.dispatchEvent(ev);


/** ready処理
---------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
});


jQuery(function () {

	jQuery('a[href^=#]').click(function() {
		var href= jQuery(this).attr("href");
		var target = jQuery(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		 jQuery('body,html').animate({scrollTop:position}, 800, 'swing');
		return false;
	});

	var showFlag = false;
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			if( !(jQuery('body,html').is(':animated')) ) {
				if (showFlag == false) {
					showFlag = true;
					jQuery('.pagetop').fadeIn();
				}
			}
		} else {
			if (showFlag) {
				showFlag = false;
				jQuery('.pagetop').fadeOut();
			}
		}
	});

	var menuisOpen = false;
	var postemp;
	jQuery('.navBtn').click(function() {
		if( !menuisOpen ) {
			jQuery(this).addClass('navBtn__close');
			jQuery('.header__navSp').addClass('-isOpen');
			postemp = jQuery(window).scrollTop();
			jQuery('.container-full').addClass('fixed').css({'top': -postemp});
			menuisOpen = true;
		}
		else {
			jQuery(this).removeClass('navBtn__close');
			jQuery('.header__navSp').removeClass('-isOpen');
			jQuery('.container-full').removeClass('fixed').css({'top': 0});
			window.scrollTo(0, postemp);
			menuisOpen = false;
		}
	});
	jQuery('.mainNavigation__sp a').click(function() {
		jQuery('.navBtn').removeClass('navBtn__close');
		jQuery('.header__navSp').removeClass('-isOpen');
		jQuery('.container-full').removeClass('fixed').css({'top': 0});
		window.scrollTo(0, postemp);
		menuisOpen = false;
	});

});
