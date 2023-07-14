import * as ReactDOM from 'react-dom';
import './MyModal.css';
import { useEffect, useState } from 'react';

function ModalBody({close,children}) {
    return (
        <div className="our-modal">
            {children}
        </div>
    );
}

function Modal({show,close,children})
{
    console.log('modal open', show);
    // const [show,setShow] = useState(show);
    // useEffect(() => {
    //     setShow(show);
    // },[show]);
    
    return(
        <div>
            State is {show+''}
            {
                show == true ? <ModalBody show={show}
                                          close={close}
                                          children={children}/> : null 
            }
        </div>
    );
}

export default function MyModal({show,open,close,children})
{
    if(show)
    {
        return ReactDOM.createPortal(
            <Modal show={show}
                   open={open}
                   close={close}
                   children={children}/>,
            document.body
          );
    }
    else{
        return null;
    }
    
}