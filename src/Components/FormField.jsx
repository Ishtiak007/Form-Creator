
const FormField = ({ index, field, onChange, onRemove }) => {
    return (
        <div>
            <label>Field {index + 1}:</label>
            <br />
            <input
                type="text"
                name="label"
                value={field.label}
                onChange={(e) => onChange(index, e)}
                placeholder="Label"
                className="input input-bordered input-success w-full max-w-xs p-3 m-1"
            />
            <input
                type="text"
                name="value"
                value={field.value}
                onChange={(e) => onChange(index, e)}
                placeholder="Value"
                className="input input-bordered input-success w-full max-w-xs p-3 m-3"
            />
            <br />
            <button className="btn mb-5" type="button" onClick={() => onRemove(index)}>Remove</button>
        </div>
    );
};

export default FormField;
