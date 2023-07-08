import React, { useState } from "react";

function TaskName(props) {

  return (
    <div>
      <label htmlFor="task-name" className="label font-bold font-nunito">
        Task Name
      </label>
      <input
        type="text"
        id="name"
        value={props.item && props.item.name}
        className="input w-[383px] h-9 mt-1"
        placeholder="Type your Task"
        onChange={props.change}
      />
    </div>
  );
}

export default TaskName;
