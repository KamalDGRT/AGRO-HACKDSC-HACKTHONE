import React from 'react'
// import {useSelector,useDispatch} from 'react-redux'
// import {Actions} from './actions'
import Header from './Header'
import Banner from './Banner'
import ProductsList from './ProductsList'

function Home() {
    
    return (
        <div >
            <Header/>
            <Banner/>
            <ProductsList/>
            
        </div>
    )
}

export default Home
