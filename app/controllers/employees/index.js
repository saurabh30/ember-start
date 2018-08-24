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
          var self =this;
          this.get('store').findRecord('employee', id).then(function(employee){
            employee.destroyRecord();
            self.transitionToRoute('employees');
          });
        }

    }  
});
