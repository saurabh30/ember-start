import Controller from '@ember/controller';
let ID = 14;
export default Controller.extend({
    actions:{
        add(){
            var employee= this.get('store').createRecord('employee', {
            id:ID++,    
            contact:this.get('eContact'),
            name :this.get('eName'),
            location:this.get('eCity')
            });
            this.transitionToRoute('employees');
            //employee.save();

            
        }
    }
});
