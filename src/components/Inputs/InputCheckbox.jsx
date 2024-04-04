/* eslint-disable react/prop-types */
const InputCheckbox = ({ label, options }) => {
  return (
    <>
      <label className="block text-sm font-semibold leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2.5">
        <div className="space-y-2">
          {options.map((option, i) => (
            <div className="relative flex gap-x-3" key={i}>
              <div className="flex h-6 items-center">
                <input
                  id={option.id}
                  name={option.name}
                  type="checkbox"
                  defaultChecked={option.checked}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor={option.id}
                  className="font-medium text-gray-900"
                >
                  {option.title}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InputCheckbox;
