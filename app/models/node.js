var Node = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  created: DS.attr('date')
});

Node.FIXTURES = [
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
];

export default Node;
