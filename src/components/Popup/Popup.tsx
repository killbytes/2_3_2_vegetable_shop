import { ReactNode } from "react";

import { Popover, Text } from "@mantine/core";

type PopupProps = {
    children: ReactNode;
};

const Popup = ({ children }: PopupProps) => {
    return (
        <Popover
            width={320}
            position="bottom-end"
            shadow="md"
        >
            <Popover.Target>{children}</Popover.Target>

            <Popover.Dropdown>
                <Text fw={600}>Cart is empty</Text>
            </Popover.Dropdown>
        </Popover>
    );
};

export default Popup;