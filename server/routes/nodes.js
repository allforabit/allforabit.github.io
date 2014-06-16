module.exports = function(app) {
   app.get('/api/nodes', function(req, res) {
     res.send(JSON.stringify({nodes: [
       {
         id: 1,
         title: 'Learn Ember.js',
         body: 'Yo yo'
       },
       {
         id: 2,
         title: 'Thing',
         body: 'Yo yo'
       },
       {
         id: 3,
         title: 'Another thing',
         body: 'Yo yo'
       }
     ]}));
   });

   app.get('/api/nodes/*', function(req, res) {
     res.send(JSON.stringify({nodes: [
       {
         id: 1,
         title: 'Learn Ember.js',
         body: 'Yo yo'
       }
     ]}));
   });

};
