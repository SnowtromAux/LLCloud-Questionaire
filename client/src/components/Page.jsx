import '../styles/Page.css';
import { useNavigate } from 'react-router-dom';

import NumberField from './NumberField';
import OptionsField from './OptionsField';
import TextField from './TextField';

function Page(props) {
	const navigate = useNavigate();
	const { data } = props;
    return (
        <div id = "page-wrapper">
            {data.fields.map((field, index) => {
                switch (field.type) {
                    case "number":
                        return (
                            <NumberField
                                key={index}
                                question={field.question}
                                options={field.options}
                                next_pages={field.next_pages}
                            />
                        );
                    case "text":
                        return (
                            <TextField
                                key={index}
                                question={field.question}
                                options={field.options}
                                next_pages={field.next_pages}
                            />
                        );
                    case "option":
                        return (
                            <OptionsField
                                key={index}
                                question={field.question}
                                options={field.options}
                                next_pages={field.next_pages}
                            />
                        );
                    default:
                        return null;
                }
            })}

			<button onClick = {() => {navigate("/")}}>Back To Start</button>
        </div>
    );
}

export default Page;
