import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.set('results',this.get('showData')(''));
    },
  
});
