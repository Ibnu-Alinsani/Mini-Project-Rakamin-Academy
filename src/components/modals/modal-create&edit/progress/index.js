import React, { useState } from "react";

function Progress(props) {

  return (
    <div className="mt-5">
      <label htmlFor="progress" className="label font-bold font-nunito">
        Progress
      </label>
      <input
        type="number"
        id="progress_percentage"
        className="input w-32 h-9 mt-1"
        value={props.item && props.item.progress_percentage}
        placeholder="70%"
        onChange={props.change}
      />
    </div>
  );
}

export default Progress;
