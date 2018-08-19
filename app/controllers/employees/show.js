import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        edit(){
            var self = this;
            var name = this.get('model.name');
            var contact = this.get('model.contact');
            var location = this.get('model.location');
            this.get('store').findRecord('employee',this.get('model.id')).then(function(employee){
                  employee.set('name',name);
                  employee.set('contact',contact);
                  employee.set('location',location);
                  self.transitionToRoute('employees');
                  employee.save();
            });
        }
    }
});
