import React,{useEffect} from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";
import instance from './assets/instances'
import {useSelector,useDispatch} from 'react-redux'
import {Actions} from './Actions'




function ProductsList() {

    const dispatch = useDispatch();
    const products =useSelector(state=>state.products)
    
    useEffect(()=>{
        async function fetchData(){
            var data = await instance.get('/getPrdt')
            dispatch(Actions.getPrdt(data))
            return data.data
        }
        fetchData();
    })
    
  return (
    <div className="productList_container">
      <h1>Shop By Nearby.</h1>
      <div className="products_cards">
          {products.map((d,i)=>(
              <ProductCard
              key={i}
              ProductLocation={d.location}
              ProductName={d.name}
              ProductPrice={d.price}
              ProductImage={d.image}
              ProductMeasure={d.measure}
              />
          ))}
        
      </div>
    </div>
  );
}

export default ProductsList;
