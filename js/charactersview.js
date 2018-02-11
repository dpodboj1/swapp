define([
    'jquery',
    'underscore',
    'backbone',
    'characterview'
], function(
    $,
    _,
    Backbone,
    CharacterView
){
    return Backbone.View.extend({
        tagName: 'ul',

        className: 'mojalista',

        initialize: function(options){
            if (!(options && options.model))
                throw new Error("model is not specified.");
        },

        render: function(){
            const self = this;

            this.model.each(function(character){
                const view = new CharacterView({ model: character });
                self.$el.append(view.render().$el);
            });

            return this;
        }
    });
});