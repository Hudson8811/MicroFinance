$(document).ready(function () {
    // МАСКА ТЕЛЕФОНА
    $('.order-inputbox-phone').mask('+7 (999) 999-99-99');
    // МАСКА ТЕЛЕФОНА

    // ПОЛЗУНОК ЛЭНДИНГ ПЕЙДЖА
    $(".bannerBlock-ui-slider").slider({
        value:5000,
        min: 5000,
        max: 350000,
        step: 50,
        slide: function( event, ui ) {
          $( ".bannerBlock-ui-input" ).val(ui.value);
        }
      });
      $( ".bannerBlock-ui-input" ).val($( ".bannerBlock-ui-slider" ).slider( "value"));
      $('.bannerBlock-ui-input').change(function (e) {
        e.preventDefault();
        let PriceValue = $(this).val();
    
        $('.bannerBlock-ui-slider').slider({
          value: PriceValue,
        });
      });
      // ПОЛЗУНОК ЛЭНДИНГ ПЕЙДЖА

      // FAQ
      $(document).on('click', '.questions-title', function(){
        const $this = $(this);

        if(!$this.hasClass('questions-title--active')){
          $('.questions-title').removeClass('questions-title--active');
          $('.questions-content').removeClass('questions-content--active');
          $this.addClass('questions-title--active');
          $this.siblings('.questions-content').addClass('questions-content--active');
        } else{
          $this.removeClass('questions-title--active');
          $this.siblings('.questions-content').removeClass('questions-content--active');
        }
      })
      // FAQ

      // ПРЕДЛОЖЕНИЯ
      $(document).on('click', '.suggestions-more-in', function(e){
        e.preventDefault();
        const $this = $(this);

        $this.removeClass('suggestions-more--active');
        $this.siblings('.suggestions-more-out').addClass('suggestions-more--active');
        $this.parents('.suggestions-item-title').siblings('.suggestions-item-content').addClass('suggestions-item-content--active')
        
      })

      $(document).on('click', '.suggestions-submore-in', function(e){
        e.preventDefault();
        const $this = $(this);

        $this.removeClass('suggestions-submore--active');
        $this.siblings('.suggestions-submore-out').addClass('suggestions-submore--active');
        $this.parents('.suggestions-subitem-title').siblings('.suggestions-subitem-content').addClass('suggestions-subitem-content--active');
      })

      $(document).on('click', '.suggestions-more-out', function(e){
        e.preventDefault();
        const $this = $(this);

        $this.removeClass('suggestions-more--active');
        $this.siblings('.suggestions-more-in').addClass('suggestions-more--active');
        $this.parents('.suggestions-item-title').siblings('.suggestions-item-content').removeClass('suggestions-item-content--active')
      })

      $(document).on('click', '.suggestions-submore-out', function(e){
        e.preventDefault();
        const $this = $(this);

        $this.removeClass('suggestions-submore--active');
        $this.siblings('.suggestions-submore-in').addClass('suggestions-submore--active');
        $this.parents('.suggestions-subitem-title').siblings('.suggestions-subitem-content').removeClass('suggestions-subitem-content--active');
      })
      // ПРЕДЛОЖЕНИЯ
    });
