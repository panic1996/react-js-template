import React from "react";
import cn from "classnames";
import { Container } from "@/shared/ui";
import styles from "./header.module.scss";

const Header = ({ className }) => {
	return (
		<header className={cn(styles.header, className)}>
			<Container className={styles.container}>Header</Container>
		</header>
	);
};

export { Header };
