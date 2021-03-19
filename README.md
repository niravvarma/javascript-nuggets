# JS 6 concepts and examples

1. **map** function on array - returns same number of items from the original array but what it returns depends on the operations within the callback function.
2. **unique** values of array - use map function to get whichever item required from the original array, then use "new Set" function to return only the unique values and then finally use spread operator to collect them in an array.
3. **dynamic objects** of array - sometimes it is helpful to use [] brackets for setting or getting values from the array, check the example.
4. **array destructuring** - items in an array can be read simply by setting value as const [varName1, varName2...] = arrayName. The order of the items retrieved are same as order of the items in the array.
5. **object destructuring** - same as array destructuring except the syntax uses curly brackets and also, any key can be called directly from the object. No constraint in which order values can be retrieved.
6. **spread operator** function on array or object- split either array or object using ... notation & copy to another array or object respectively. Note: always use spread operator if the original array or object needs to be preserved.
7. **rest operator** function on object or array - same syntax as spread operator i.e. using ... notation but always called at the end of while defining new array / object / destructuring / passing argument to function.
8. **filter & find** functions on array - calls a callback function on both filter and find. Use filter to find list of object matching / non-matching the required criteria which returns array. If no value found, empty array [] is returned. Whereas find returns first item from array if required criteria matches / non-matches and returns the item itself (not an array). If no value found, undefined is returned.
9. **reduce** function on array - calls a callback function wherein it takes initial value, then accumulates data from the array and return a single instance - variable / array / object.
10. **reduce** function on object - same as reduce function on array except that initial value is object. This is very handy while fetching any data from API which returns objects and further can be used with object destructuring. Do check the example.
11. **Array.from** - this is a special which returns array from an object which has a length property or an iterable object and array-like/ish for e.g. string, nodeList, Set. Do check the pagination example. 
