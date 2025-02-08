# MongoDB $inc Operator Error: Incorrect Argument Type

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries. The error arises from providing a string value instead of a numeric value to the `$inc` operator, which results in unexpected behavior or errors.

## Bug Description
The bug is caused by using a string ('1') instead of a number (1) in the `$inc` operator.  The `$inc` operator expects a numeric value to increment the field by.  Using a string will lead to either a failed update or incorrect data modification.

## Bug Solution
The solution is simply to ensure that the value provided to the `$inc` operator is a numeric type (e.g., integer or float).

## How to reproduce
1. Create a MongoDB collection and insert a document with a numerical field.
2. Run the buggy code provided in `bug.js`.
3. Observe the unexpected result.
4. Run the corrected code provided in `bugSolution.js`.
5. Observe the correct result.
