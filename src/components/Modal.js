import React from "react";
import "../styles/Modal.css";

export default function Modal({
	toggleModal,
	selectedImage,
	toggleScrollLock,
}) {
	return (
		<div className="Modal_Container">
			<img className="large_design" alt="Enlarged Design" src={selectedImage} />
			<button
				className="closeBtn"
				onClick={() => {
					toggleScrollLock(false);
					toggleModal(false);
				}}
			>
				Close
			</button>
		</div>
	);
}
