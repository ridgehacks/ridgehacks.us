import * as React from "react";
import * as pageStyle from "./index.module.scss";

const IndexPage = () => {
	return (
		<main className={pageStyle.container}>
			<div className={pageStyle.header}>
				<p>logo</p>
				<p>links</p>
			</div>
			<div
				className={pageStyle.section}
				style={{ backgroundColor: "#233", color: "white" }}
			>
				<h1>this is a section</h1>
			</div>
			<div className={pageStyle.section}>
				<h1>this is a section</h1>
			</div>
			<div className={pageStyle.section}>
				<h1>this is a section</h1>
			</div>
		</main>
	);
};

export default IndexPage;
