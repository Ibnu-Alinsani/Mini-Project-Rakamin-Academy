import React, { useContext } from "react";
import context from "../../../context";

function BtnGroup(props) {
  const { createGroup, createItem, editItem, deleteItem } = useContext(context);

  return (
    <div className="text-end mt-8">
      <button
        className="btn font-bold border-2 border-slate-200 me-[0.62rem] transition hover:bg-slate-200"
        onClick={props.close}
      >
        Cancel
      </button>
      {props.type === "create" ? (
        <button
          className='btn stroke-white bg-cyan-600 border-2 border-cyan-600" text-white hover:bg-cyan-700'
          onClick={() => {
            createItem(props.group, props.payload);
            props.close();
          }}
        >
          Save Task
        </button>
      ) : props.type === "edit" ? (
        <button
          className='btn stroke-white bg-cyan-600 border-2 border-cyan-600" text-white hover:bg-cyan-700'
          onClick={() => {
            editItem(props.itemId, props.id, props.payload);
            props.close();
          }}
        >
          Save Task
        </button>
      ) : props.type === "input-group" ? (
        <button
          className='btn stroke-white bg-cyan-600 border-2 border-cyan-600" text-white hover:bg-cyan-700'
          onClick={() => {
            createGroup(props.payload, props.setpayload);
            props.close();
          }}
        >
          Submit
        </button>
      ) : (
        <button
          className="btn text-white stroke-white border-2 bg-red-600 border-red-600 hover:bg-red-700"
          onClick={() => {
            deleteItem(props.id, props.groupId);
            props.close();
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default BtnGroup;
