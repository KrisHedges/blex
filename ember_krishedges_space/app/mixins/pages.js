import Ember from 'ember';

export default Ember.Mixin.create({
  pages: function(){
    let cats = this.store.peekAll("category");
    return cats.findBy("name", "Pages").get("posts");
  },

  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('pages', this.pages());
  }

});
