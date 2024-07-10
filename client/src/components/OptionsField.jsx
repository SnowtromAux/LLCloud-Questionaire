import '../styles/OptionsField.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OptionsField(props) {
	const navigate = useNavigate();
	const { question , options , next_pages } = props;
	const [nextPage , setNextPage] = useState(next_pages[0]);

	const handleChange = (event) => {
	  	setNextPage(next_pages[event.target.value]);
	};

	const openNextPage = () => {
		if(nextPage === null)return;
		navigate(nextPage);
	}
  
	return (
	  	<div id = "options-field-wrapper">
			<label>{question}</label>
			<select onChange={handleChange}>
				{options.map((option , index) => (
					<option key={option} value={index}>{option}</option>
				))}
			</select>
			<button onClick = {() => {openNextPage()}}>Next</button>
	  	</div>
	);
}

export default OptionsField;
