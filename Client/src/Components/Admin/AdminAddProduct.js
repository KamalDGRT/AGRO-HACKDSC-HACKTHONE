import React from 'react'
import "./AdminAddProduct.css"
import instance from '../assets/instances'
import {useHistory} from 'react-router-dom'


const AdminAddProduct = () => {

    const history = useHistory();

    const addProduct = (e)=>{
        e.preventDefault();
        var data = new FormData(e.target)
        var name = data.get('name')
        var price = data.get('price')
        var measure = data.get('measure')
        var stock = data.get('stock')
        var image = data.get('image')
        var description = data.get('description')

        instance.post('/addPrdt',{
            name,
            price,
            measure,
            stock,
            image,
            description
        }).then(res=>{
            if(res){
                history.push('/')
            }
        })

  

    }



    return (
        <div>
            <div className="admin-add-product-container">
                <h1>Add Product</h1>
                <form  onSubmit={e=>addProduct(e)}>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" name="name"  id="product-name" />
                    <div className="product-price-container">
                        <div className="price">
                            <label htmlFor="price">Price</label>
                            <input type="text"  name="price" id="product-price" />
                        </div>
                        <div className="measure-container">
                            <input type="radio" name="measure" id="kg" value="kg" />
                            <label htmlFor="measure">/Kg</label>
                        </div>
                        <div className="measure-container">
                            <input type="radio" name="measure" id="piece" value="piece" />
                            <label htmlFor="measure">/Piece</label>
                        </div>
                        <div className="measure-container">
                            <input type="radio" name="measure" id="pack" value="pack" />
                            <label htmlFor="measure">/Pack</label>
                        </div>
                    </div>
                    <div className="stock-and-category">
                        <button>Category</button>
                        <div className="stock-container">
                            <label htmlFor="stock">Stock</label>
                            <input type="text" name="stock" id="stock"/>
                        </div>
                    </div>
                    <label htmlFor="image">Product Image Link</label>
                    <input type="text" name="image" id=""/>
                    <label htmlFor="description">Desctiption</label>
                    <textarea type="text" name="description"></textarea>
                    <div className="add-container">
                        <button className="add-description">+</button>
                    </div>
                    <div className="btn-container">
                        <input type="submit" value="Upload Product"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminAddProduct;
