/* global $:FALSE */
import Ember from 'ember';
import pages from '../mixins/pages';

export default Ember.Route.extend( pages,{
  actions: {
    didTransition: function(){
      $('body').removeClass('mobile-menu-visible');
      $('.hamburger').removeClass('open');
    }
  }
});
