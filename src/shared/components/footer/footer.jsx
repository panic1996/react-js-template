import React from "react";
import cn from "classnames";
import { Container } from "@/shared/ui";
import styles from "./footer.module.scss";

const Footer = ({ className }) => {
	return (
		<footer className={cn(styles.footer, className)}>
			<Container className={styles.container}>Footer</Container>
		</footer>
	);
};

export { Footer };
