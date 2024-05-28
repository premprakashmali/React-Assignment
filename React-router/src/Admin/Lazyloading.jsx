import React, { Suspense, lazy } from 'react'
import Categories from './Categories'

const LazyCategories = lazy(() => import('./Categories'))
function Lazyloading() {
    return (
        <div>
            <h1>Lazy Loading</h1>
            <Suspense fallback={<div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
                <div className="spinner-border text-danger"></div>
            </div>}>
                <LazyCategories />
            </Suspense>
        </div>
    )
}

export default Lazyloading