// Write your solution in this file!
const employee = {
    name: `John Doe`,
    streetAddress: `1 Main St, New York, NY, 12345`
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const update = {...employee};
    update[key] = value;
    return update;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const removed = {...employee};
    delete removed[key];
    return removed;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}