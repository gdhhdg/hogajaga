/**
 * Created by gunnerhatmaker on 10/9/17.
 */
$(document).ready(function () {
	
	$('#videoButton').click(function () {
		$('.videowrapper').fadeIn();
		$('.pics').hide();
	});
	
	$('#photoButton').click(function () {
		$('.pics').fadeIn();
		$('.videowrapper').hide();
	})
});
