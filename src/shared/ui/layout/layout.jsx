import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/shared/components";
import styles from "./layout.module.scss";

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header className={styles.header} />
			<main className={styles.content}>
				<Outlet />
			</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export { Layout };
