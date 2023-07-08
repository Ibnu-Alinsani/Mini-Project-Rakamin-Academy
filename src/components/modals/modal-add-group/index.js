import React, { useState } from "react";
import BtnGroup from "../btn-group";
import InputDesc from './input-desc';
import TextField from './text-field';

function ModalAddGroup(props) {

  const [payload, setPayload] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
  }

  return (
    <>
      <h1 className="font-nunito text-lg font-bold mb-7">Add New Group</h1>
      <TextField change={handleChange}/>
      <InputDesc change={handleChange}/>
      <BtnGroup type="input-group" payload={payload} setpayload={setPayload} close={props.close}/>
    </>
  );
}

export default ModalAddGroup;
