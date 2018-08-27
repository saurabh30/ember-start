import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByName(param) {
          if (param !== '') {
            return this.get('store').query('employee', { name: param });
          } else {
            return this.get('store').findAll('employee'); 
          }  
        },
        delete (id){
          this.get('store').findRecord('employee', id, { backgroundReload: false }).then(function(employee){
            employee.deleteRecord();
            employee.save();
          });
        }

    }  
});
