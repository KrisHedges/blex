/* global $:FALSE */
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    let self = this;
    return this.store.findAll('category').then(function(){
      return self.store.findAll('post').then(function(posts){
        return posts.filter(function(post){
          return post.get('categories').any(function(cat){
            return cat.get('name') !== "Pages";
          });
        }).sortBy('published_at').reverse();
      });
    });
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
