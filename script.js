$('.input-cart-number').on('keyup change', function() {
  const $t = $(this);
  
  if ($t.val().length > 3) {
    $t.next('.input-cart-number').focus();
  }
  
  let card_number = '';
  $('.input-cart-number').each(function() {
    card_number += $(this).val() + ' ';
  });
  
  $('.credit-card-box .number').html(card_number.trim());
});

$('#card-holder').on('keyup change', function() {
  const $t = $(this);
  $('.credit-card-box .card-holder div').html($t.val());
});

$('#card-expiration-month, #card-expiration-year').change(function() {
  const m = $('#card-expiration-month').val(); // get selected month
  const y = $('#card-expiration-year').val().substr(2, 2); // get last two digits of year
  $('.card-expiration-date div').html(m + '/' + y);
});

$('#card-ccv').on('focus', function() {
  $('.credit-card-box').addClass('hover');
}).on('blur', function() {
  $('.credit-card-box').removeClass('hover');
}).on('keyup change', function() {
  $('.ccv div').html($(this).val());
});

// CodePen Tile Preview
setTimeout(function() {
  // Functionality could be added here if needed
}, 500);

function getCreditCardType(accountNumber) {
  let result;
  if (/^5[1-5]/.test(accountNumber)) {
    result = 'mastercard';
  } else if (/^4/.test(accountNumber)) {
    result = 'visa';
  } else if ( /^(5018|5020|5038|6304|6759|676[1-3])/.test(accountNumber)) {
    result = 'maestro';
  } else {
    result = 'unknown';
  }
  return result;
}

$('#card-number').change(function() {
  console.log(getCreditCardType($(this).val()));
});
