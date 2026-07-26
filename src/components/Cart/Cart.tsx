// import { Button } from "@mantine/core";
// import { IconShoppingCart } from "@tabler/icons-react";
//
// import Popup from "@/components/Popup/Popup";
// import { useCart } from "@/context/useCart";
//
// const Cart = () => {
//     const {
//         totalPrice,
//         totalQuantity,
//     } = useCart();
//
//     return (
//         <Popup>
//             <Button
//                 rightSection={<IconShoppingCart size={18} />}
//                 color="green"
//             >
//                 Cart ({totalQuantity}) · ${totalPrice}
//             </Button>
//         </Popup>
//     );
// };
//
// export default Cart;

import { Button } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

import Popup from "@/components/Popup/Popup";
import CartPopup from "@/components/CartPopup/CartPopup";

import { useCart } from "@/context/useCart";

const Cart = () => {
    const {
        totalPrice,
        totalQuantity,
    } = useCart();

    return (
        <Popup content={<CartPopup />}>
            <Button
                color="green"
                leftSection={<IconShoppingCart size={18} />}
            >
                Cart ({totalQuantity}) · ${totalPrice}
            </Button>
        </Popup>
    );
};

export default Cart;