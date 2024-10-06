$('.input-cart-number').on('keyup change', function() {
	var $t = $(this);

	if ($t.val().length > 3) {
		$t.next().focus();
	}

	var card_number = '';
	$('.input-cart-number').each(function() {
		card_number += $(this).val() + ' ';
		if ($(this).val().length == 4) {
			$(this).next().focus();
		}
	});

	$('.credit-card-box .number').html(card_number.trim());
});

$('#card-holder').on('keyup change', function() {
	var $t = $(this);
	$('.credit-card-box .card-holder div').html($t.val());
});

$('#card-expiration-month, #card-expiration-year').change(function() {
	var m = $('#card-expiration-month option:selected').text();
	var y = $('#card-expiration-year option:selected').text().substr(2, 2);
	$('.card-expiration-date div').html(m + '/' + y);
});

$('#card-ccv').on('focus', function() {
	$('.credit-card-box').addClass('hover');
}).on('blur', function() {
	$('.credit-card-box').removeClass('hover');
}).on('keyup change', function() {
	$('.cvv div').html($(this).val());
});