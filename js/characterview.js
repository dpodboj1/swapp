define([
    'jquery',
    'underscore',
    'backbone'
], function(
    $,
    _,
    Backbone
){
    return Backbone.View.extend({
        tagName: "li",

        initialize: function(options){
            if (!(options && options.model))
                throw new Error("Please define a model!");
        },

        render: function(){
            this.$el.html(this.model.get("name"));

            return this;
        }
    });
});