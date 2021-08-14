import React from "react" 
import Modal from "./Modal"

const DeletePostModal = props =>{
    return(
        <Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <div className="DeletePostModal">
                <h1>Are you sure?</h1>
                <p>You are about to delete this badge.</p>
                <div>
                    <button onClick={props.onDeleteBadge} className="btn btn-danger mx-2">Delete</button>
                    <button onClick={props.onClose} className="btn btn-success mx-2">Cancel</button>
                </div>
            </div>
        </Modal>
    );
}

export default DeletePostModal;