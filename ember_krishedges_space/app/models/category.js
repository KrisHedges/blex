/* global Ember */
import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  inserted_at: DS.attr('string'),
  posts: DS.hasMany('post'),

  post_count: Ember.computed('posts', function(){
    return this.get('posts').length;
  }),

  created: Ember.computed('inserted_at', function(){
    let time = this.get('inertedt_at');
    return moment(time).format('MMMM Do, YYYY');
  }),

  short_description: Ember.computed('description', function(){
    return this.get('description').substring(0,40);
  })

});
