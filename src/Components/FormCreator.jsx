
import { useState } from 'react';
import FormField from './FormField';

const FormCreator = () => {
    const [formFields, setFormFields] = useState([]);

    const handleAddField = () => {
        setFormFields([...formFields, { label: '', value: '' }]);
    };

    const handleFieldChange = (index, e) => {
        const { name, value } = e.target;
        const updatedFields = [...formFields];
        updatedFields[index][name] = value;
        setFormFields(updatedFields);
    };

    const handleRemoveField = (index) => {
        const updatedFields = [...formFields];
        updatedFields.splice(index, 1);
        setFormFields(updatedFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formFields);
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className='text-4xl font-bold my-4'>Form Creation Application</h1>
                        <form onSubmit={handleSubmit}>
                            {formFields.map((field, index) => (
                                <FormField
                                    key={index}
                                    index={index}
                                    field={field}
                                    onChange={handleFieldChange}
                                    onRemove={handleRemoveField}
                                />
                            ))}
                            <button className='buttonProject2 mr-7' type="button" onClick={handleAddField}>Add Field</button>
                            <button className='buttonProject2' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormCreator;
