import React, { useEffect, useState } from 'react'
import Aheader from './Aheader'
import axios from 'axios';
import { Helmet } from 'react-helmet';

function Categories() {
    useEffect(() => {
        fetch();
    }, [])

    const [data, setdata] = useState([]);
    const fetch = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
        console.log(result.data);
        setdata(result.data)
    }
    return (
        <div>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </Helmet>
            <Aheader />
            {/* <Aheader/> */}
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>
                                <h1 className="mb-4">Manage Categories</h1>
                                <div id="success" />

                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Categories ID</th>
                                            <th>Categories Name</th>
                                            <th>Categories Image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.title}</td>
                                                        <td> <img src={value.url} alt="" width={50} height={50} /></td>
                                                        <td>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}

export default Categories