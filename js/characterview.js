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
            const template = _.template($('#characterTemplate').html());
            const html = template(this.model.toJSON());
            this.$el.html(html);

            return this;
        }
    });
});
