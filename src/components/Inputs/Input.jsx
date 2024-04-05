/* eslint-disable react/prop-types */
const Input = ({
  type = "text",
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
            error
              ? "ring-red-400 focus:ring-red-400"
              : "ring-gray-300 focus:ring-primary"
          }`}
          value={value}
          onChange={handleChange}
        />
        {error && (
          <span className="text-xs text-red-400 ms-1">
            {error || "field is required"}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
