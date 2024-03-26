type propsType = {
    setValue: (value: string) => void;
    keys: string;
};

const InputComponent: React.FC<propsType> = ({ setValue, keys }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="w-1/2 px-1">
            <label
                htmlFor={keys}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {keys}
            </label>
            <input
                type="text"
                id={keys}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
            />
        </div>
    );
};

export default InputComponent;
