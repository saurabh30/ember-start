import Controller from '@ember/controller';

export default Controller.extend({
     actions: {
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
