$(function(){

	$('.toggle_ttl').nextToggle();


  	// スクロールのオフセット値。対象位置より上にスクロールするにはマイナス値。
	var offsetY = 0,
	// スクロールにかかる時間。
	time = 500;
		
	// ページ内リンクのみを取得。
	$('a').on('click',function() {
		
		// 移動先となる要素を取得。
		var target = $(this.hash);
		if (!target.length) return ;
		// 移動先となる値。
		
		var targetY = target.offset().top + offsetY;
		
		$('html,body').stop().animate({scrollTop: targetY}, time);
		
		// ハッシュ書き換え。IE非対応。
		// window.history.pushState(null, null, this.hash);
		
		
		// デフォルトの処理はキャンセル。
		return false;
	});
});