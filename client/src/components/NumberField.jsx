import '../styles/NumberField.css';
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NumberField(props) {
	const navigate = useNavigate();
	const { question , options } = props;
	const [value , setValue] = useState("");
	const [nextPage , setNextPage] = useState("");
	const [hasBtn , setHasBtn] = useState(false);

	useEffect(() => {
		for(const option of options){		
			if(option.option.length === 1 && value === option.option[0]){
				setHasBtn(true);
				setNextPage(option?.page_path || null);
				return;
			}else if(option.option.length === 2 &&  value >= option.option[0] && value <= option.option[1]){		
				setHasBtn(true);
				setNextPage(option?.page_path || null);
				return;
			}
		}	
	} , [options , value]);

	const openNextPage = () => {
		if(nextPage === null)return;
		navigate(nextPage);
	}

	return (
		<div id = "number-field-wrapper">
			<label>{question}</label>
			<input 
				type = "number"
				value = {value}
				onChange={(e) => setValue(e.target.value)}
				placeholder = "Otgovor"
			></input>
			<button style = {{display: hasBtn ? "block" : "none"}} onClick={() => {openNextPage()}}>Next</button>
		</div>
	);
}

export default NumberField;
