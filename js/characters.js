define([
    'underscore',
    'backbone',
    'character'
], function(
    _,
    Backbone,
    Character
){
    return Backbone.Collection.extend({
        model: Character,
        url: 'https://swapi.co/api/people/?format=json',
        parse: function(data){
            return data.results;
        }
    });
});