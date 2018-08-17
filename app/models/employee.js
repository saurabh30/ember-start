import DS from 'ember-data';

export default DS.Model.extend({
    name : DS.attr('string'),
    contact : DS.attr('number'),
    location : DS.attr('string',{defaultValue: 'Noida'})
});
