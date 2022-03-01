// Write your solution in this file!
const employee = {
    name: 'Michelle',
    streetAddress: '123 Walk',
}
 const employee2 ={
     name: 'Matt',
     streetAddress: '987 Drive',
 }

function updateEmployeeWithKeyAndValue(object, key, value){
    const newemployee = {...object}; 
    newemployee[key] = value; 
    return newemployee;
}
console.log(updateEmployeeWithKeyAndValue(employee2, 'streetAddress', '987 Drive'));
 
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value;
    return object;  
}
function deleteFromEmployeeByKey(object, key, value){
    return {
        ...object,
        [key]: value,
}}
delete object.key;

function destructivelyDeleteFromEmployeeByKey(object, key, value){
        object[key] = value;
        return object; 
}