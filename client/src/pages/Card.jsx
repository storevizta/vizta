import React from "react";


export default function Card ({title, description, image, price, id,stock, createdInDb}) {
   // console.log('SOY EL CREATEDINDB', createdInDb,)
return(
    <div>
    <div >
   
        <h1>{id}</h1>
        <h2 >{title}</h2>
        <h3 >{stock}</h3>
        <h4 >{description}</h4>
        <h5 >{price}</h5>
         <p >{createdInDb}</p>
        <h6 >{rating}</h6>
    <img src={image} alt="image not found" width="250px" height="250px"/>
    </div>
    </div>
)
}