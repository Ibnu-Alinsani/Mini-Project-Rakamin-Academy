import React, { useEffect, useState } from "react";
import BtnGroup from "../btn-group";
import Progress from "./progress";
import TaskName from "./task-name";

function ModalCreateTask(props) {
  const [payload, setPayload] = useState({
    name: "",
    progress_percentage: "",
  });
  useEffect(() => {
    if (props.item) {
      setPayload(props.item);
    }
  }, [props.item]);

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
  };

  return (
    <>
      <h1 className="font-nunito text-lg font-bold mb-7">
        {props.type === "create"
          ? "Create Task"
          : props.type === "edit"
          ? "Edit Task"
          : null}
      </h1>
      {props.type === "create" ? (
        <div>
          <TaskName change={handleChange} />
          <Progress change={handleChange} />
        </div>
      ) : props.type === "edit" ? (
        <div>
          <TaskName change={handleChange} item={payload} />
        </div>
      ) : null}
      {props.type === "create" ? (
        <BtnGroup
          type="create"
          close={props.close}
          group={props.groupId}
          payload={payload}
        />
      ) : props.type === "edit" ? (
        <BtnGroup
          type="edit"
          close={props.close}
          itemId={props.itemId}
          id={props.id}
          payload={{ name: payload.name , target_todo_id: props.id}}
        />
      ) : null}
    </>
  );
}

export default ModalCreateTask;
