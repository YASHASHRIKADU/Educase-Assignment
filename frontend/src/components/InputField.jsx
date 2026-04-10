function InputField({
  id,
  name,
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  required = false
}) {
  return (
    <div className="input-group">
      {label ? (
        <label htmlFor={id} className="input-label">
          {label}
          {required ? <span className="required-marker">*</span> : null}
        </label>
      ) : null}
      <input
        id={id}
        name={name}
        className="text-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
