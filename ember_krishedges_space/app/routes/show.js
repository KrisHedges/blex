/* global $:FALSE */
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findAll("category").then(function(){
      return this.store.findAll('post').then( function(posts){
        let post = posts.filterBy('slug', params.slug).get('firstObject');
        return post;
      }.bind(this));
    }.bind(this));
  },
  actions: {
    didTransition: function(){
      $('body').removeClass('mobile-menu-visible');
      $('.hamburger').removeClass('open');
      let height = $(".header").outerHeight() - 60;
      if(screen.width < 1023){
        $("#main").animate({ scrollTop: height }, 450);
      }
    }
  }
});
