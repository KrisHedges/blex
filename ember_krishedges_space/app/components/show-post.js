/* global $:FALSE */
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    $('img[alt~="lightbox"]').wrap( "<div class='lightboxable'></div>" );
    $('.lightboxable').unwrap('p');
    $('.lightboxable').on('click', function(){
      let image = $(this).find('img').attr('src');
      $('.lightbox img').attr('src',image);
      $('.lightbox').toggleClass('visible');
    });
    $('.lightbox').on('click', function(){
      $(this).removeClass('visible');
      $(this).find('img').attr('src','');
    });
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
          $('.lightbox').click();
        }
    });
  }
});

