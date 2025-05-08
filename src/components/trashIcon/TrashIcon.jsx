import React from "react";
import "./trashIcon.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import useCartStore from "../../hooks/useCartStore"

const TrashIcon = () => {

    const clearCart = useCartStore((state) => state.clearCart);

    return(
    <div onClick={clearCart} >
        <FontAwesomeIcon icon={faTrash} className="trash-icon" alt="trash can icon"/>
    </div>
    )
}

export default TrashIcon;
