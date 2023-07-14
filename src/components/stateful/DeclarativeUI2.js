import { useState } from "react";

export default function DeclarativeUI2()
{
    const [price,setPrice] = useState(0);
    const priceChangeHandler = (event) => {
        setPrice(Number(event.target.value));
    }

    const [quantity,setQuantity] = useState(0);
    const qtyChangeHandler = (event) => {
        setQuantity(Number(event.target.value));
    }
    
    return(
        <div>
            Price <input className={"form-control"}
                         type={'text'}
                         value={price}
                         onChange={(event) => {priceChangeHandler(event)}}/>

            Qty <input className={"form-control"}
                       type={'text'}
                       value={quantity}
                       onChange={(event) => {qtyChangeHandler(event)}}/>
            <div>
                Total is <input type={'text'}
                                className={'form-control'}
                                value={price * quantity}/>
            </div>
        </div>
    );
}