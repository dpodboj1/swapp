define([
    'underscore',
    'backbone',
    'examplemodel'
], function(_, Backbone, ExampleModel){
    var initialize = function(){
        const exampleModel = new ExampleModel();
    };

    return {
        initialize: initialize
    };
});