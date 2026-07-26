// import { ReactNode } from "react";
// import { Stack, Text, Popover } from "@mantine/core";
// import { useCart } from "@/context/useCart";
//
// type PopupProps = {
//     children: ReactNode;
// };
//
// const Popup = ({ children }: PopupProps) => {
//     const { cartItems, totalPrice } = useCart();
//     return (
//         <Popover
//             width={320}
//             position="bottom-end"
//             shadow="md"
//         >
//             <Popover.Target>{children}</Popover.Target>
//
//             <Popover.Dropdown>
//                 {cartItems.length === 0 ? (
//                     <Text fw={600}>Cart is empty</Text>
//                 ) : (<Stack gap="xs">
//                         {cartItems.map((item) => (
//                             <Text key={item.product.id}>
//                                 {item.product.name} × {item.quantity}
//                             </Text>
//                         ))}
//
//                         <Text fw={700}>
//                             Total: ${totalPrice}
//                         </Text>
//                     </Stack>)
//                 }
//             </Popover.Dropdown>
//         </Popover>
//     );
// };
//
// export default Popup;



import type { ReactNode } from "react";
import { Popover } from "@mantine/core";

type PopupProps = {
    children: ReactNode;
    content: ReactNode;
};

const Popup = ({
                   children,
                   content,
               }: PopupProps) => {
    return (
        <Popover
            width={420}
            position="bottom-end"
            shadow="md"
        >
            <Popover.Target>
                {children}
            </Popover.Target>

            <Popover.Dropdown
                style={{
                    maxHeight: 420,
                    overflowY: "auto",
                }}
            >
                {content}
            </Popover.Dropdown>
        </Popover>
    );
};

export default Popup;