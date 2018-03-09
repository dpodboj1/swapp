define([
    'jquery',
    'underscore',
    'backbone',
    'character',
    'characters',
    'charactersview'
], function(
    $,
    _,
    Backbone,
    Character,
    Characters,
    CharactersView
){
    const initialize = function(){
        const characters = new Characters();
        characters.fetch({
            success: function(data){
                console.log('I have fetched the data successfully!');
                const charactersView = new CharactersView({ model: data });
                $("body").append(charactersView.render().$el);
            },
            error: function(){
                console.log('I encountered errors while fetching data.');
            }
        });
    };

    return {
        initialize: initialize
    };
});
