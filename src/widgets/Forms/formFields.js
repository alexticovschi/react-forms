import React from 'react';


const FormFields = (props) => {
    // console.log(props)
    const renderFields = () => {
        const formArray = [];

        for(let elementName in props.formData) {
            formArray.push({
                id: elementName,
                settings: props.formData[elementName]
            })         
        }

        return formArray.map((item, i) => {
            // console.log(item.settings.element)
            return (
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })
    }

    // checks if there is a label; if it is return the label name, else return null(nothing)
    const showLabel = (show, label) => {
        return show ? <label>{label}</label> : null
    }

    // takes to arguments: the actual event and the id of the element we want ot modify
    const changeHandler = (event, id) => {
        const newState = props.formData;
        //console.log('New State',newState);
        newState[id].value = event.target.value

        props.change(newState);
    }

    const renderTemplates = (data) => {
        let formTemplate = '';
        let values = data.settings;

        // checks the data; decide what should be rendered
        switch(values.element) {
            case('input'):
                formTemplate = (
                    <div>
                        { showLabel(values.label, values.labelText) }
                        <input 
                            {...values.config}
                            value={values.value}
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }
                        />
                    </div>
                );
                break;
            case('textarea'):
                formTemplate = (
                    <div>
                        { showLabel(values.label, values.labelText) }
                        <textarea 
                            {...values.config}
                            value={values.value}
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }
                        />
                    </div>
                );
                break;
            case('select'):
                formTemplate = (
                    <div>
                        { showLabel(values.label, values.labelText) }
                        <select 
                            value={values.value}
                            name={values.config.name}
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }
                        >
                            { values.config.options.map((item, i) => (
                                <option key={i} value={item.text}>
                                    {item.text}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            break;

            default:
                formTemplate = null
        }

        return formTemplate;
    }

    return(
        <div>
            {renderFields()}
        </div>
    )
}


export default FormFields;