/* global $:FALSE */
import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["page"],
  page: 1,
  perPage: 4,

  chunkArray: function(arr, size){
    let i;
    let groups = [];
    for (i = 0; i < arr.length; i += size) {
      groups.push(arr.slice(i, i + size));
    }
    return groups;
  },

  pagedPosts: Ember.computed('content', 'page', function(){
     let posts = this.get('content');
     return this.chunkArray(posts, this.perPage);
  }),

  posts: Ember.computed('content', 'page', function(){
      return this.get('pagedPosts')[this.page -1];
  }),

  nextPage: Ember.computed('page', function(){
    return this.page + 1;
  }),

  previousPage: Ember.computed('page', function(){
    return this.page - 1;
  }),

  isFirstPage: Ember.computed('page', function(){
    return this.get('page') === 1;
  }),

  isLastPage: Ember.computed('page', function(){
    return this.get('page') === this.get('pagedPosts.length');
  }),

  pageNumbers: Ember.computed('page', function(){
    let length = this.get('pagedPosts.length');
    return $.map($(Array(length + 1)),function(val, i) { return i; }).splice(1, length + 1);
  })

});
