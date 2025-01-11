```javascript
const query = {
  $expr: {
    $and: [
      {
        $regexMatch: {
          input: "$field",
          regex: /^[0-9]+$/ // Check for only numeric characters
        }
      },
      {
        $gt: [{ $toDouble: "$field" }, 10]
      }
    ]
  }
};
db.collection.find(query);
```