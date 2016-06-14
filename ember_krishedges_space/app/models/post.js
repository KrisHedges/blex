/* global Ember */
import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
    title: DS.attr('string'),
    slug: DS.attr('string'),
    body: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    published: DS.attr('boolean'),
    published_at: DS.attr('date'),
    inserted_at: DS.attr('date'),
    categories: DS.hasMany('category', {async: true}),

    alpha_categories: Ember.computed('categories', function(){
        return this.get('categories').sortBy('name');
    }),

    url_safe_title: Ember.computed('title', function(){
        let title = this.get('title');
        if(title){
            return title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        } else {
            return "url-for-post";
        }
    }),

    published_date: Ember.computed('published_at', function(){
        let time = this.get('published_at');
        return time ? moment(time).format('MMMM Do YYYY') : false;
    }),

    category_names: Ember.computed('categories', function(){
        let cats = this.get('categories');
        if(cats.get('length')< 1){
            return "No Catgeories Assigned";
        }
        if(cats.get('length') === 1){
            return cats.get('firstObject').get('name');
        }
        if(cats.get('length')> 1){
            let names = cats.map(function(cat){
                return cat.get('name');
            });
            return names.join(", ");
        }
    }),

    category_descriptions: Ember.computed('categories', function(){
        let cats = this.get('categories');
        if(cats.get('length')< 1){
            return "No Catgeories Assigned";
        }
        if(cats.get('length') === 1){
            return cats.get('firstObject').get('description');
        }
        if(cats.get('length')> 1){
            let names = cats.map(function(cat){
                return cat.get('description');
            });
            return names.join(" & ");
        }
    }),

    category_classes: Ember.computed('categories', function(){
        let cats = this.get('categories');
        if(cats.get('length')< 1){
            return "";
        }
        if(cats.get('length') === 1){
            let catname = cats.get('firstObject').get('name');
            switch(catname){
            case "The Visual Cortex":
                return "visual";
            case "The Auditory Cortex":
                return "auditory";
            case "The Cerebral Cortex":
                return "cerebral";
            }
            if(cats.get('firstObject').get('name') === "The Visual Cortex"){
            }
        }
        if(cats.get('length')> 1){
            let names = cats.map(function(cat){
                return cat.get('name');
            });
            return names.join(" ");
        }
    }),

    parent: Ember.computed('slug', function(){
        return this.get('slug').substr(0, this.get('slug').lastIndexOf("/"));
    }),

    background_image: Ember.computed('image', function() {
        var image = this.get('image');
        return Ember.String.htmlSafe("background-image: url(" + image +")");
    })

});
