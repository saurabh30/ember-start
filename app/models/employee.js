import DS from 'ember-data';

export default DS.Model.extend({
    name : DS.attr(),
    contact : DS.attr(),
    location : DS.attr()
});
