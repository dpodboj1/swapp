define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var ExampleModel = Backbone.Model.extend({
        initialize: function(){
            console.log("I have been initialized!");
        }
    });

    return ExampleModel;
});