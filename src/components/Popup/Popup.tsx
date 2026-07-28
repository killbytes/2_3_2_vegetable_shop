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