import { Group, Badge } from "@mantine/core";
import Cart from "@/components/Cart/Cart";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Group gap="xs">
                    <h2 className={styles.logo}>Vegetable</h2>
                    <Badge
                        color="green"
                        radius="xl"
                        variant="filled"
                    >
                        SHOP
                    </Badge>
                </Group>
                <Cart />
            </div>
        </header>
    );
};

export default Header;