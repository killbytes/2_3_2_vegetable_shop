import Header from "@/components/Header/Header";
import ProductList from "@/components/ProductList/ProductList";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Catalog</h1>
                <ProductList />
            </main>
        </>
    );
};

export default Layout;