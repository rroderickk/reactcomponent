import React from "react";

import "./ButtonNeon.css";

export default function ButtonNeon (props) {

		const onClickButton = (msg) => {
 		
		alert(msg);
	
	};
	
	return (
		
		<React.Fragment>
			
			<div className="ButtonNeonDiv">
				
				<header className="Button-header">
					
					<button
						
						className="ButtonNeon"
						
						onClick={() => onClickButton("def")}
					
					>
							
						this it's a button
					
					</button>
				
				</header>
			
			</div>
		
		</React.Fragment>
	
	);

}
