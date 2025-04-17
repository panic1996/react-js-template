import React from "react";
import { PageLayout } from "@/components/shared/page-layout/page-layout";
import { Container } from "@/components/shared/container/container";
import BrandIcon from "@/assets/icons/brand.svg";
import "./styles.scss";

const IndexPage = () => {
	return (
		<PageLayout>
			<section className="hero-section">
				<Container className="hero-section__container">
					<div className="hero-offer">
						<BrandIcon
							width={512}
							height={512}
						/>
						<h1>Front React JS Template</h1>
					</div>
				</Container>
			</section>
		</PageLayout>
	);
};

export { IndexPage };
