define([
    'jquery',
    'underscore',
    'backbone',
    'mustache'
], function(
    $,
    _,
    Backbone,
    Mustache
){
    return Backbone.View.extend({
        tagName: 'li',

        initialize: function(options){
            if (!(options && options.model))
                throw new Error("Please define a model!");
        },

        getTemplateData(data) {
            data.toJSON();
            return data;
        },

        renderTemplate(data, view) {
            const template = $('#characterViewTemplate').html();
            const html = Mustache.render(template, this.getTemplateData(data));
            return view.$el.html(html);
        },

        render: function(){
            const data = this.model;
            this.renderTemplate(data, this);
        }
    });
});
