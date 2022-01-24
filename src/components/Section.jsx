import React from "react";
import * as componentStyle from "./section.module.scss";

export default function Section({ style, bg, id, children }) {
	function getContrastYIQ(hexColor) {
		hexColor = hexColor.replace("#", "");
		var r = parseInt(hexColor.substr(0, 2), 16);
		var g = parseInt(hexColor.substr(2, 2), 16);
		var b = parseInt(hexColor.substr(4, 2), 16);
		var yiq = (r * 299 + g * 587 + b * 114) / 1000;
		return yiq >= 128 ? "var(--text-dark)" : "var(--text-light)";
	}
	return (
		<div
			className={componentStyle.section}
			id={id}
			style={{
				backgroundColor: bg,
				color: bg && getContrastYIQ(bg),
				// transform: `translateX(${Math.random() * 6 - 3}px) rotate(${
				// 	Math.random() * 6 - 3
				// }deg)`,
				...style,
			}}
			onScroll={e => {
				console.log(e.target.scrollTop);
			}}
		>
			<div>{children}</div>
		</div>
	);
}
