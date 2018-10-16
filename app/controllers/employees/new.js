import Controller from '@ember/controller';
let ID = 14;
export default Controller.extend({
    actions:{
        add(){
            var employee= this.get('store').createRecord('employee', {
                name: this.get('eName'),
                contact: this.get('eContact'),
                location: this.get('eLocation'),
            });
            employee.save();
            this.transitionToRoute('employees');
        }
    }
});
