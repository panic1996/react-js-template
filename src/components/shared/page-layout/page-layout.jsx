import React from "react";
import "./styles.scss";

const PageLayout = ({ header, children, footer }) => {
	return (
		<div className="page-layout">
			{!!header && header}
			<main className="page-layout__content">{children}</main>
			{!!footer && footer}
		</div>
	);
};

export { PageLayout };
