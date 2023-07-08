import React from "react";

function InputDesc(props) {
  return (
    <div className="mb-7">
      <label htmlFor="description" className="label">
        Description
      </label>
      <textarea
        type="text"
        id="description"
        className="input w-[383px] h-[88px] resize-none"
        placeholder="placeholder"
        onChange={props.change}
      />
    </div>
  );
}

export default InputDesc;
