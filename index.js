const employee = {
    name: 'Andrew', 
    streetAddress: '5009 S'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({},employee, {['name']:'Sam', ['streetAddress']: '11 Broadway'});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {['name']:'Sam', ['streetAddress']: '12 Broadway'});
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = Object.assign({},employee);
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
    
}