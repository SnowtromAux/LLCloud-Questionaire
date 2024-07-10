import '../styles/NumberField.css';
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NumberField(props) {
	const navigate = useNavigate();
	const { question , options , next_pages } = props;
	const [value , setValue] = useState("");
	const [nextPage , setNextPage] = useState("");
	const [hasBtn , setHasBtn] = useState(false);

	useEffect(() => {
		for(const index in options){		
			if(options[index].length === 1 && value === options[index][0]){
				setHasBtn(true);
				setNextPage(next_pages[index]);
				return;
			}else if(options[index].length === 2 &&  value >= options[index][0] && value <= options[index][1]){		
				setHasBtn(true);
				setNextPage(next_pages[index]);
				return;
			}
		}	
	} , [next_pages , options , value])

	const openNextPage = () => {
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
