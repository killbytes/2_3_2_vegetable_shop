import {Button} from "@mantine/core";
import {IconShoppingCart} from "@tabler/icons-react";
import Popup from "@/components/Popup/Popup";
import CartPopup from "@/components/CartPopup/CartPopup";
import {useCart} from "@/context/useCart";
import styles from "./Cart.module.scss";

const Cart = () => {
    const {
        totalQuantity,
    } = useCart();

    console.log(totalQuantity)
    return (
        <Popup content={<CartPopup/>}>
            <Button
                color="green"
                rightSection={<IconShoppingCart size={18}/>}
            >
                {totalQuantity === 0 ? (
                    "Cart"
                ) : (
                    <>
                        <span className={styles.total}>{totalQuantity}</span>
                        Cart
                    </>
                )}
            </Button>
        </Popup>
    );
};

export default Cart;