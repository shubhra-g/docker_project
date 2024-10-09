import React from "react";

function Input({ type, placeholder, name, value, onChange, error }) {
  return (
    <div className="mb-6">
      <input
        type={type}
        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
      />
    </div>
  );
}

export const SelectInput = ({ onChange }) => {
  return (
    <div className="mb-6 w-full">
      <div className="form-control w-full">
        <select
          onChange={onChange}
          name="highestEducation"
          className="form-controlselect select-bordered form-control w-full max-w-xs block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          <option value="default" className="w-full" disabled selected>
            Highest Level Of Education
          </option>
          <option value="primary">Primary School</option>
          <option value="secondary">SecondaryEducation</option>
          <option value="ond">OND / HND</option>
          <option value="bachelors">Bachelors</option>
          <option value="masters">Masters</option>
          <option value="phd">PHD</option>
          <option value="others">Others</option>
        </select>
      </div>

      <fieldset className="w-full space-y-1 mt-5">
        <label for="files" className="block text-2xl">
          Attach Your Resume *optional*
        </label>
        <div className="flex">
          <input
            type="file"
            name="files"
            id="files"
            className="w-full px-8 py-12 border-2 border-dashed rounded-md border-yellow text-yellow"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Input;
