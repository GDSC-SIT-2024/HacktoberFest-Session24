$(document).ready(function() {
  // Handle card number input and auto-focus next field
  $('.input-cart-number').on('keyup change', function() {
    const $this = $(this);
    
    // Auto-move to next input field if length is sufficient
    if ($this.val().length > 3) {
      $this.next('.input-cart-number').focus();
    }

    // Update displayed card number
    let cardNumber = '';
    $('.input-cart-number').each(function() {
      cardNumber += $(this).val() + ' ';
    });
    $('.credit-card-box .number').html(cardNumber.trim());
  });

  // Handle card holder name input
  $('#card-holder').on('keyup change', function() {
    const holderName = $(this).val();
    $('.credit-card-box .card-holder div').html(holderName);
  });

  // Handle expiration date input
  $('#card-expiration-month, #card-expiration-year').on('change', function() {
    const month = $('#card-expiration-month').val().padStart(2, '0');
    const year = $('#card-expiration-year').val().substr(2, 2);
    $('.credit-card-box .card-expiration-date div').html(`${month}/${year}`);
  });

  // Handle CCV input and card flip effect
  $('#card-ccv').on('focus', function() {
    $('.credit-card-box').addClass('hover');
  }).on('blur', function() {
    $('.credit-card-box').removeClass('hover');
  }).on('keyup change', function() {
    const ccv = $(this).val();
    $('.ccv div').html(ccv);
  });

  // Optional: Function to detect credit card type (uncomment if needed)
  /* function getCreditCardType(accountNumber) {
    if (/^5[1-5]/.test(accountNumber)) {
      return 'mastercard';
    } else if (/^4/.test(accountNumber)) {
      return 'visa';
    } else if (/^(5018|5020|5038|6304|6759|676[1-3])/.test(accountNumber)) {
      return 'maestro';
    } else {
      return 'unknown';
    }
  }

  $('#card-number').on('change', function() {
    const cardType = getCreditCardType($(this).val());
    console.log(cardType);
  }); */
  
  // Optional: Preview card (extend if needed)
  setTimeout(function() {
    // Add any necessary code for tile preview here
  }, 500);
});
