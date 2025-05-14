$(document).ready(function () {
  // OTP Generation and Verification
  $('#actionButton').click(function () {
    var emailInput = $('#emailInput').val();
    var otpInput = $('#otpInput').val();
    var actionButtonText = $('#actionButton').text();

    // Check if email input exists and button text is 'Generate OTP'
    if (emailInput && actionButtonText === 'Generate OTP') {
      $('#otpInputWrap').show();
      $('#actionButton').text('Verify OTP');
    }
    // Check if OTP input exists and button text is 'Verify OTP'
    else if (otpInput && actionButtonText === 'Verify OTP') {
      alert('OTP Verified!');
      window.location.href = '/product-details.html';
    }
  });

  // Product Gallery Swiper Thumbnails
  $('.product-gallery').each(function (index) {
    // Unique selector for each thumbs and main swiper
    var thumbsClass = '.product-gallery-thumbs-' + index;
    var mainClass = '.product-gallery-slider-' + index;

    // Product Gallery Swiper Thumbnails
    var thumbsSwiper = new Swiper(thumbsClass, {
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: false,
      loop: true,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      breakpoints: {
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 10,
        }
      }
    });

    // Main Product Gallery Slider
    var mainSwiper = new Swiper(mainClass, {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next-' + index,
        prevEl: '.swiper-button-prev-' + index,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  });

  // Select2 initialization
  $('.select2').select2();

  // Toggle button with icon change
  const toggleBtn = document.getElementById('orderTabsToggle');
  const icon = toggleBtn.querySelector('.toggle-icon');

  toggleBtn.addEventListener('click', function () {
    // Small delay to sync with Bootstrap collapse
    setTimeout(() => {
      const isCollapsed = toggleBtn.classList.contains('collapsed');

      if (isCollapsed) {
        icon.classList.remove('fa-xmark', 'icon-rotate');
        icon.classList.add('fa-bars-staggered');
      } else {
        icon.classList.remove('fa-bars-staggered');
        icon.classList.add('fa-xmark', 'icon-rotate');
      }
    }, 200);
  });
});
