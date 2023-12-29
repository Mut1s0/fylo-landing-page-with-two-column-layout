import "./FormInput.css";

function FormInputs(props) {

    const {errorMessage, onChange, id, ...inputProps} = props;

    return (

        <div>

            <input 
                {...inputProps}
                onChange={onChange}
            />

            <span className="text-red-500">{errorMessage}</span>

        </div>
    )
}

export default FormInputs;