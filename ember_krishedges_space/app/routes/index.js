/* global $:FALSE */
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll("category").then(function(){
      return this.store.findAll("post");
    }.bind(this));
  },

  latest_music: function(){
    let post = this.store.peekAll("category").findBy("name", "The Auditory Cortex").get("posts").sortBy('published_at').reverse();
    return post[0];
  },

  latest_web: function(){
    let post = this.store.peekAll("category").findBy("name", "The Cerebral Cortex").get("posts").sortBy('published_at').reverse();
    return post[0];
  },

  latest_art: function(){
    let post = this.store.peekAll("category").findBy("name", "The Visual Cortex").get("posts").sortBy('published_at').reverse();
    return post[0];
  },

  latest_life_post: function(){
    let post = this.store.peekAll("category").findBy("name", "The Living Mind").get("posts").sortBy('published_at').reverse();
    return post[0];
  },

  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('latest_music_post', this.latest_music());
    controller.set('latest_web_post', this.latest_web());
    controller.set('latest_art_post', this.latest_art());
    controller.set('latest_life_post', this.latest_life_post());
  },

  actions: {
    didTransition: function(){
      $('body').removeClass('mobile-menu-visible');
      $('.hamburger').removeClass('open');
      if(screen.width < 1023){
        $("#main").animate({ scrollTop: 0 }, 450);
      }
    }
  }
});

