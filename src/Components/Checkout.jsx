import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "./store/cartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "./store/UserProgressContext";

export default function Checkout(){

const cartCtx = useContext(CartContext);
const userProgressCtx = useContext(UserProgressContext);

const cartTotal = cartCtx.items.reduce((totalPrice, item)=>totalPrice + item.quantity * item.price ,0)

function handleClose(){
    userProgressCtx.hideCheckout();
}

    return <Modal open={userProgressCtx.progress === "checkout"}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label="Full Name" type="text" id="full-name"/>
            <Input label="E-mail Address" type="email" id="email"/>
            <Input label="Street" type="text" id="street"/>

            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"/>
                <Input label="City" type="text" id="city"/>
            </div>
            <p className="modal-actions">
                <Button type="button" textOnly onClick={handleClose}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
}