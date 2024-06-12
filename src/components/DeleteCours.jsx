import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const DeleteCours = () => {
    const [data, setData] = useState(
        {
            "title": ""
            
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:8001/DeleteCours", data).then(
            (response) => {
                setData(response.data)
                if (response.data.status == "test") {
                    alert("success")

                } else {
                    alert("error")

                }
            }
        ).catch(
            (err) => {
                alert(err.message)
            }
        ).finally()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" name='title' id='title' value={data.title} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="btn btn-danger" onClick={readValue}>Delete</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DeleteCours