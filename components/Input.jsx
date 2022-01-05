import React from "react";

const Input = ({ name, id, opt }) => {
  console.log(opt);
  return (
    <div>
      <select
        className="rounded-lg border border-slate-800/40 text-slate-800 bg-transparent w-48 py-1 px-4"
        name={name}
        id={id}
      >
        {opt.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Input;
