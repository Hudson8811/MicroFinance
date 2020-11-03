$(document).ready(function () {

    $("#bannerBlock-ui-slider").slider({
        value:5000,
        min: 5000,
        max: 350000,
        step: 50,
        slide: function( event, ui ) {
          $( "#bannerBlock-ui-input" ).val(ui.value);
        }
      });
      $( "#bannerBlock-ui-input" ).val($( "#bannerBlock-ui-slider" ).slider( "value"));

      $('#bannerBlock-ui-input').change(function (e) {
        e.preventDefault();
        let PriceValue = $(this).val();
    
        $('#bannerBlock-ui-slider').slider({
          value: PriceValue,
        });
        
      });

    });
