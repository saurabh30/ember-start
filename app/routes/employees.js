import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.get('store').findAll('employee');
    },
    actions: {
        /* add(){
                alert(this.get('name'));
                this.get('store').createRecord('employee', {
                contact:'9857892233',
                name :'saurabh',
                location:'noida'
              });
        }, */
        

    } 
});
