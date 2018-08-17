import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        add(){
            
            var employee= this.get('store').createRecord('employee', {
            
            contact:this.get('eContact'),
            name :this.get('eName'),
            location:this.get('eCity')
            });
            console.log(employee);
            this.transitionToRoute('employees');
            employee.save();

            
        }
    }
});
