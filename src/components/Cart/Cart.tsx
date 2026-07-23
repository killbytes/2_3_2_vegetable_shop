import { Button } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

import Popup from "@/components/Popup/Popup";

const Cart = () => {
    return (
        <Popup>
            <Button
                rightSection={<IconShoppingCart size={18} />}
                color="green"
            >
                Cart
            </Button>
        </Popup>
    );
};

export default Cart;