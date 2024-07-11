import '../styles/TextField.css';

import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TextField(props) {
	const navigate = useNavigate();
	const { question , options } = props;
	const [value , setValue] = useState("");
	const [nextPage , setNextPage] = useState("");
	const [hasBtn , setHasBtn] = useState(false);


	useEffect(() => {
		for(const option of options)
			if(value === option.option){
				setHasBtn(true);
				setNextPage(option?.page_path || null);
				return;
			}	
	} , [options , value])

	const openNextPage = () => {
		if(nextPage === null)return;
		navigate(nextPage);
	}

	return (
		<div id = "text-field-wrapper">
			<label>{question}</label>
			<input 
				value = {value}
				onChange={(e) => setValue(e.target.value)}
				placeholder = "Otgovor"
			></input>
			<button style = {{display: hasBtn ? "block" : "none"}} onClick={() => {openNextPage()}}>Next</button>
		</div>
	);
}

export default TextField;
