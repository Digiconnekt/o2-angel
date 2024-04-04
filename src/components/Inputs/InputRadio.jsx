/* eslint-disable react/prop-types */
const InputRadio = ({ label, options, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label className="block text-sm font-semibold leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2.5">
        <div className="space-y-2">
          {options.map((option, i) => (
            <div className="flex items-center gap-x-3" key={i}>
              <input
                id={option.id}
                name={option.name}
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                value={option.title}
                checked={value === option.title}
                onChange={handleChange}
              />
              <label
                htmlFor={option.id}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InputRadio;
