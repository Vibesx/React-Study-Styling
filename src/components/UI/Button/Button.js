/** Styled components approach: */
// import styled from "styled-components";

// // more info on how tagged templates work:
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
// // &:<pseudoselector> -> the & is basically a placeholder for the main element
// const Button = styled.button`
// 	width: 100%;
// 	font: inherit;
// 	padding: 0.5rem 1.5rem;
// 	border: 1px solid #8b005d;
// 	color: white;
// 	background: #8b005d;
// 	box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
// 	cursor: pointer;

// 	@media (min-width: 768px) {
// 		width: auto;
// 	}

// 	&:focus {
// 		outline: none;
// 	}

// 	&:hover,
// 	&:active {
// 		background: #ac0e77;
// 		border-color: #ac0e77;
// 		box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// 	}
// `;

/* CSS equivalent to above tagged template:
.button {
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
}

.button:focus {
  outline: none;
}

.button:hover,
.button:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

*/

/** CSS Modules approach: */
import React from "react";

import styles /* or classes; name is up to you; it will basically store all CSS classes in this object */ from "./Button.module.css";

const Button = (props) => {
	return (
		<button
			type={props.type}
			className={styles.button}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
