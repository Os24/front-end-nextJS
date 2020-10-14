import React, { useState } from 'react'

function crearProducto(){
    const [ product, setProduct ] = useState({
        NameProduct:"asdf",
        Description:"zxcv",
        ProductQuantity:4,
        Status: true,
        Category:"Some category"


    })

    const handleChange = event =>{
        let value = event.target.value
        let property = event.target.name
        console.log(value)
        console.log(property)
        setProduct( { ...product, [property]:value })
    }

    const handleSubmit = () => {
        console.log( product )
        fetch("http://localhost:5000/product/create",{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify( product )
        }).then( response => {
            console.log( response )
        })
    }

    const handleDelete = productKey => {
        fetch(`http://localhost:5000/product/${productKey}/delete`,{
            method:"DELETE"
        }).then( response => {
            console.log( response )
        })
    }

    return(
        <form>
            <div>
                <label>Nombre:</label>
                <input 
                    placeholder="Nombre del producto" 
                    value={product.NameProduct}
                    onChange={handleChange}
                    name="NameProduct"
                ></input>
            </div>
            <div>
                <label>Descripción:</label>
                <input 
                    placeholder="description del producto" 
                    value={product.Description}
                    onChange={handleChange}
                    name="Description"
                ></input>
            </div>
            <div>
                <label>Status</label>
                <input 
                    placeholder="Status" 
                    value={ product.Status }
                    onChange={ handleChange }
                    name="Status"
                ></input>
            </div>
            <div>
                <label>Categoria:</label>
                <input 
                    placeholder="cuantos  productos hay" 
                    value={ product.Category }
                    onChange={ handleChange }
                    name="Category"
                ></input>
            </div>
            <div>
                <label>Cantidad:</label>
                <input 
                    placeholder="Cantidad del producto" 
                    value={ product.ProductQuantity }
                    onChange={ handleChange }
                    name="ProductQuantity"
                ></input>
            </div>
            <button type="button" onClick={ handleSubmit }>Guardar</button>

        </form>
    )
}

export default crearProducto