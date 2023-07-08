import React, { useState } from "react";
import * as MODAL from "../modals";

function Header() {
  const [showAddGroup, setShowAddGroup] = useState(false);

  return (
    <div className="flex gap-[0.62rem] items-center px-5 py-4 border-b shadow-sm">
      <span className="text-lg font-bold">Product Roadmap</span>
      <button
        className="btn bg-cyan-600 text-white text-xs font-bold flex items-center gap-1 transition hover:bg-cyan-700"
        onClick={() => setShowAddGroup(true)}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <g id="plus">
            <path
              id="Vector"
              d="M6 2.5V9.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M2.5 6H9.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <span>Add New Group</span>
      </button>
      <MODAL.Modal show={showAddGroup} close={() => setShowAddGroup(false)}>
        <MODAL.ModalAddGroup close={() => setShowAddGroup(false)} />
      </MODAL.Modal>
    </div>
  );
}

export default Header;
