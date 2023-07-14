import { useState } from "react";
import MyModal from "./MyModal";

export default function MyModalDemo()
{
    const [showModal,setShowModal] = useState(false);
    const open = () => {
        setShowModal(true);
    }
    const close = () => {
        setShowModal(false);
    }
    console.log('showModal',showModal);
    return(
        <div>
            <button type="button"
                    className="btn btn-success"
                    onClick={open}>
                        Open
            </button>
            <MyModal show={showModal}
                     open={open}
                     close={close}>
                        <div className={'our-modal-body'}>
                            <p>Modal Body</p>
                            <button type='button'
                                    className='btn btn-danger'
                                    onClick={close}>
                                Hide Modal
                            </button>
                        </div>
            </MyModal>
        </div>
    );
}