```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({fieldName: 'someValue'}, {$inc: {counter: '1'}});
```