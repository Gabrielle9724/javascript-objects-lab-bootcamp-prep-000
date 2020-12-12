var obj = {}

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign ({}, obj, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj.prop2 = 2
  return obj
}
