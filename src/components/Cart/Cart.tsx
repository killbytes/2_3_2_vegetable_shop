import { Button } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

import Popup from "@/components/Popup/Popup";
import { useCart } from "@/context/useCart";

const Cart = () => {
    const {
        totalPrice,
        totalQuantity,
    } = useCart();

    return (
        <Popup>
            <Button
                rightSection={<IconShoppingCart size={18} />}
                color="green"
            >
                Cart ({totalQuantity}) · ${totalPrice}
            </Button>
        </Popup>
    );
};

export default Cart;