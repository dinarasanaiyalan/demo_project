import React, { Component } from 'react'

class EmployeeList extends Component {
    render() {

        const employeeList = [
            { id: 101, name: "Ramesh", address: "Chennai", salary: 25000.90 },
            { id: 102, name: "Kamesh", address: "Vellore", salary: 35000.90 },
            { id: 103, name: "Dinesh", address: "Tiruchy", salary: 15000.90 },
            { id: 104, name: "Suresh", address: "Selam", salary: 45000.90 }
        ]

        const showEmployeeDetailsList = employeeList.map(emp => {
            return (
                <div>
                    <p>Employee ID : {emp.id}</p>
                    <p>Employee Name : {emp.name}</p>
                    <p>Employee Address : {emp.address}</p>
                    <p>Employee Salary : {emp.salary}</p>
                </div>
            )
        })

        return (
            <div>
                <h1>Employee Details</h1>
                {showEmployeeDetailsList}
                <div>
                    <table>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Employee Address</th>
                            <th>Employee Salary</th>
                        </tr>
                        {employeeList.map((emp) => {
                            return <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.address}</td>
                                <td>{emp.salary}</td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        )
    }
}

export default EmployeeList