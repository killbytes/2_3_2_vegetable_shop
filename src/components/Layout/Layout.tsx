import Header from "@/components/Header/Header";

import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Catalog</h1>
            </main>
        </>
    );
};

export default Layout;