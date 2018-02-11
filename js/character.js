define([
    'underscore',
    'backbone'
], function(
    _,
    Backbone
){
    return Backbone.Model.extend({
        validate: function(attrs){
            if (!attrs.name)
                return "Name is required.";
        }
    });
});