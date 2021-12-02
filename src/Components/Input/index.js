import React from "react";
const Input = ({
  type,
  icon,
  name,
  errormessage,
  placeholder,
  setState,
}) => {
  // const { name, value, setState, erromessage, type } = props;
  // const inputStyle = "bg-red";
  // const fieldsetStyle = "bg-white";
  // const errorsetStyle = "bg-black";
  return (
    <fielset class="mb-8">
      <label for="username" class="block text-gray-700 text-sm font-bold mb-2">
        <span class="text-red-500">&nbsp;*</span>
        {name}
      </label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          id="username"
          class="block pr-10 shadow border-2 rounded w-full py-2 px-4 text-black-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 transition duration-500 ease-in-out"
          placeholder={placeholder}
          onChange={({ target: { value } }) => {
            setState(value);
          }}
          type={type}
        />
      </div>

      <strong class="text-red-500 text-xs italic">
        {errormessage !== "" && errormessage}
      </strong>
    </fielset>

    // <fieldset className={`fieldset ${fieldsetStyle}`}>
    //   <input
    //     className={`input ${inputStyle}`}
    //     placeholder={name}
    //     type={type}
    //     onChange={(e) => setState(e.target.value)}
    //   />
    //   <span className={`inputError ${errorsetStyle}`}>{erromessage}</span>
    // </fieldset>
  );
};

export default Input;
