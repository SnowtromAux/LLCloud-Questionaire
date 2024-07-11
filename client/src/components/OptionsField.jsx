import '../styles/OptionsField.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OptionsField(props) {
	const navigate = useNavigate();
	const { question , options } = props;
	const [nextPage , setNextPage] = useState(options[0]?.page_path || null);

	const handleChange = (event) => {
	  	setNextPage(options[event.target.value]?.page_path);
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
					<option key={option.option} value={index}>{option.option}</option>
				))}
			</select>
			<button onClick = {() => {openNextPage()}}>Next</button>
	  	</div>
	);
}

export default OptionsField;
