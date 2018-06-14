  // 1) Objects defines a `recipes` object:
  
  var recipes = {}
  
  // 2) Objects DestructivelyUpdateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value 
  function updateObjectWithKeyAndValue(object, key, value) {
    // object[key]=[value]

    Object.assign(object,{[key]:[value]})
    return object
  }
  // 3) Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but 
  // 4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given 
  // 5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new 
  // 6) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
  // 7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair
  // 8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object: