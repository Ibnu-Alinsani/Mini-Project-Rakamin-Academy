import React from "react";
import BtnGroup from "../btn-group";

function ModalDelete({close, id, groupId}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z"
            stroke="#E11428"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-lg font-bold grow">Delete Task</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={close}
          className="cursor-pointer"
        >
          <g id="close">
            <path
              id="Vector"
              d="M18 6L6 18"
              stroke="#404040"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M6 6L18 18"
              stroke="#404040"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      <p className="text-sm my-4">
        Are you sure want to delete this task? your action can’t be reverted.
      </p>
      <BtnGroup type="delete" close={close} id={id} groupId={groupId}/>
    </>
  );
}

export default ModalDelete;
