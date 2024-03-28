import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';


function List_1() {
    return (

        <div className='bg-success' style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", }}>
            <div>
                <h1 className='text-light text-center'>The "React Way" to Render a List</h1>
                {
                    ["use Array .map",
                        "Not a for loop",
                        "Give each item a unique key",
                        "Avoide using array index as the key",
                    ].map((variant) => {
                        return (
                            <div className='d-flex mt-3 justify-content-center' style={{ gap: "20px" }}>
                                <TaskAltIcon style={{ fontSize: "45px", backgroundColor: "pink" }} />
                                <p className=' bg-light' style={{ width: "400px", fontSize: "22px" }}>{variant}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List_1