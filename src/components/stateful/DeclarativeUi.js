import { useState } from "react";

export default function DeclarativeUi()
{
    const [price,setPrice] = useState(0);
    const priceChangeHandler = (event) => {
        setPrice(Number(event.target.value));
    };

    const [quantity,setQuantity] = useState(0);
    const qtyChangeHandler = (event) => {
        setQuantity(Number(event.target.value));
    };
    return(
        <div>
            Price <input type={'text'} 
                         className={'form-control'}
                         value={price}
                         onChange={(event) => priceChangeHandler(event)}/>
            <br/>
            Qty <input type={'text'}
                       className={'form-control'}
                       value={quantity}
                       onChange={(event) => qtyChangeHandler(event)}/>
            <div>
                Total is {price * quantity}
            </div>
        </div>
    );
}