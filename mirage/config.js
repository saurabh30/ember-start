export default function() {
    this.namespace = '/api';
  
    this.get('/employees', function() {
      return {
        data: [{
          type: 'employees',
          id: 11,
          attributes: {
            contact: 9651892293,
            name: 'Veruca Salt',
            location: 'San Francisco', 
          }
        }, {
          type: 'employees',
          id: 12,
          attributes: {
            contact: 8899556611,
            name: 'Mike Teavee',
            location: 'Seattle',
          }
        }, {
          type: 'employees',
          id: 13,
          attributes: {
            contact:7788445566,
            name: 'Violet Beauregarde',
            location: 'Portland',
          }
        }]
      };
    });
  

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}