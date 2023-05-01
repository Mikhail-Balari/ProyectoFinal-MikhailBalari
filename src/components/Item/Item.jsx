import React from "react";
import './assets/Item.css';

const Item = ({id, name, img, price, stock}) => {

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
                <img src={img} alt={name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Precio: ${price}</p>
                    <p className="card-text">Stock Disponible: {stock}</p>
                    <button className="btn btn-primary">Detalles</button>
                </div>
            </div>
        </div>
    )
}

export default Item;
