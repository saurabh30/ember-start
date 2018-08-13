import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        /* add(){
                alert(this.get('name'));
                this.get('store').createRecord('employee', {
                contact:'9857892233',
                name :'saurabh',
                location:'noida'
              });
        }, */
        filterByName(param) {
          if (param !== '') {
            return this.get('store').query('employee', { name: param });
            //return this.get('store').findAll('employee');
          } else {
            return this.get('store').findAll('employee'); 
          }  
        }

    } 
});
