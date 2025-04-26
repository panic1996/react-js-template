import React from "react";
import cn from "classnames";
import styles from "./container.module.scss";

const Container = ({ className, children }) => {
	return <div className={cn(styles.container, className)}>{children}</div>;
};

export { Container };
