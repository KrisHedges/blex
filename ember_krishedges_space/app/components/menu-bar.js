/* global $:FALSE */
import Ember from 'ember';

export default Ember.Component.extend({
 actions: {
   toggleMenu: function(){
    $('.hamburger').toggleClass('open');
    $('body').toggleClass('mobile-menu-visible');
   }
 }
});
