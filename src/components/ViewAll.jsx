import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    
        const [data, changeStud] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8001/ViewAll").then(
            (response) => {
                changeStud(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
       
    
    return (
        <div>
            <Navbar />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Course Title</th>
                        <th scope="col">Course Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Venue</th>
                        <th scope="col">Trainer Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (value, index) => {
                                return <tr>
                                    <th scope="row">{value.title}</th>
                                    <td>{value.description}</td>
                                    <td>{value.date}</td>
                                    <td>{value.duration}</td>
                                    <td>{value.venue}</td>
                                    <td>{value.trainer}</td>
                                </tr>
                            }
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )

}
export default ViewAll