import React from "react";
import cn from "classnames";
import "./styles.scss";

const Container = ({ className, children }) => {
	return <div className={cn("container", className)}>{children}</div>;
};

export { Container };
