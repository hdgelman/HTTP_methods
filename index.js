const BASE_URL = "https://dummy.restapiexample.com/api/v1"

const getEmployees = async () => {
    const response = await fetch(`${BASE_URL}/employees`)
    const data = await response.json();
    // console.log(data)
};
// GET, POST, PUT, PATCH, DELETE
getEmployees()

const createEmployee = async (name, salary, age) => {
    const response = await fetch(`${BASE_URL}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            salary,
            age
        })
    });
    const result = await response.json();
    const employeeId = result.data.id;
    updateEmployee(employeeId, name, salary, age)
    deleteEmployee(employeeId);
}
createEmployee('Bernard', 200000, 40) // gives us an ID in console data

const updateEmployee = async (id, name, salary, age) => {
    const response = await fetch(`${BASE_URL}/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            salary: 101000,
            age
        })
    })
    const data = await response.json();
}

const deleteEmployee = async (id) => {
    const response = await fetch(`${BASE_URL}/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'aplication/json'
        }
    });
    const data = await response.json()
    console.log(data)
    deleteEmployee(id)
}



