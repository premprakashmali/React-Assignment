import React, { useState } from 'react'

function Inc_decr() {
    const [data, setdata] = useState({
        id: 0
    })

    const minus = () => {
        if (data.id > 0) {
            setdata({ ...data, id: data.id - 1 })
        }
    }

    return (

        <div>
            <div className='bg-primary' style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", }}>
                <div>
                    <h1 className='text-light text-center'>React Web</h1>
                    <h3 className='text-center' style={{ fontSize: "45px" }}>{data.id}</h3>
                    <div style={{ gap: "40px", display: "flex", marginTop: "20px" }}>
                        <button onClick={() => setdata({ ...data, id: data.id + 1 })} className='btn btn-dark pe-5 ps-5   '>Decrement</button>
                        <button onClick={minus} className='btn btn-dark pe-5 ps-5'>Increment</button>
                    </div>
                    <button onClick={() => setdata({ ...data, id: 0 })} className='btn btn-dark pe-5 ps-5 mt-4' style={{ marginLeft: 125 }}>Reset</button>
                </div>
            </div>
        </div>
        
    )
}

export default Inc_decr