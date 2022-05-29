import { useState } from "react"

//Va tomando los valores que se escribe en el input de un Form
export const useForm = (initialState={}) => {

    const [values, setValues] = useState(initialState);

    //Resetear el formulario
    const reset = ()=>{
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
            
        });
    }

    return [values, handleInputChange,reset]
}   
