import React, { useContext, useEffect, useState } from "react";
import LabelColor from "./label-and-color";
import ProgressBar from "./progress-bar";
import SettingButton from "./setting-button";
import SurveyDialogMenu from "./survey-dialog-menu";
import NewTask from "./new-task";
import * as MODAL from "../modals";
import context from "../../context";

function Kanban({
  theme,
  show,
  group,
  click,
  close,
  right,
  start,
  end,
  navigate,
  activeContent,
  setContent,
}) {
  const [showAddTask, setShowAddTask] = useState(false);
  const { items } = useContext(context);
  const [idx, setIdx] = useState();
  const [item, setItem] = useState();

  useEffect(() => {
    items.filter((e) => {
      if (e.id === idx) {
        setItem(e);
      }

      return null;
    });
  }, [idx]);

  const [itemFilter, setItemFilter] = useState();
  useEffect(() => {
    setItemFilter(items.filter((todo) => todo.todo_id === group.id));
  }, [items, group.id]);

  let filteredItem = itemFilter;

  if (itemFilter && !show) {
    filteredItem = itemFilter.slice(0, 1);
  }

  return (
    <div>
      <div className="font-nunito">
        <div
          className={`w-fit mb-2 p-4 border ${theme.bg} ${theme.border} transition-all rounded shadow-xl flex flex-col gap-[0.65rem]`}
          onClick={(e) => {
            click();
            setContent(null);
            e.stopPropagation();
          }}
        >
          <LabelColor styles={theme} title={group.title} />
          <p className="font-bold text-xs text-zinc-700">{group.description}</p>
          {items.filter((e) => e.todo_id === group.id).length > 0 ? (
            filteredItem &&
            filteredItem.map((e, i) => (
              <div key={i} className="kanban-item p-4">
                <p className="text-sm font-bold text-zinc-700 pb-2">{e.name}</p>
                <div className="border-t border-t-zinc-300 border-dashed flex justify-between items-center gap-3 pt-2">
                  <div>
                    <ProgressBar percentage={e.progress_percentage} />
                  </div>
                  <div className="relative">
                    <SettingButton
                      click={click}
                      clickItems={() => {
                        setContent(i);
                      }}
                      close={close}
                      show={show && activeContent === i}
                    />
                    <SurveyDialogMenu
                      click={() => setIdx(e.id)}
                      show={show && activeContent === i}
                      close={close}
                      group={group.id}
                      itemId={idx}
                      item={item}
                      navigate={navigate}
                      right={right}
                      start={start}
                      end={end}
                      id={e.id}
                      groupId={group.id}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="kanban-item px-4 py-2">
              <span className="text-zinc-500">No task</span>
            </div>
          )}
          <NewTask setshow={setShowAddTask} />

          {/* modal for new task */}
          <MODAL.Modal show={showAddTask} close={() => setShowAddTask(false)}>
            <MODAL.ModalCreateTask
              groupId={group.id}
              type="create"
              close={() => setShowAddTask(false)}
            />
          </MODAL.Modal>
        </div>
      </div>
    </div>
  );
}

export default Kanban;
