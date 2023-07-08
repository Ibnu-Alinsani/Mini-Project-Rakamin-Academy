import { useContext, useEffect, useState } from "react";
import "./App.css";
import * as COMP from "./components";
import context from "./context";

function App() {
  const { findGroup, todos, items } = useContext(context);
  useEffect(() => {
    findGroup();
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeContent, setActiveContent] = useState(null);

  const kanbanCount = Array.from({ length: 8 }).length;

  const theme = [
    {
      bg: "bg-cyan-50",
      border: "border-cyan-500",
      text: "text-cyan-600",
    },
    {
      bg: "bg-yellow-50",
      border: "border-yellow-500",
      text: "text-yellow-600",
    },
    {
      bg: "bg-red-50",
      border: "border-red-500",
      text: "text-red-600",
    },
    {
      bg: "bg-teal-50",
      border: "border-teal-500",
      text: "text-teal-600",
    },
    {
      bg: "bg-amber-50",
      border: "border-amber-500",
      text: "text-amber-600",
    },
    {
      bg: "bg-lime-50",
      border: "border-lime-500",
      text: "text-lime-600",
    },
    {
      bg: "bg-indigo-50",
      border: "border-indigo-500",
      text: "text-indigo-600",
    },
    {
      bg: "bg-violet-50",
      border: "border-violet-500",
      text: "text-violet-600",
    },
    {
      bg: "bg-fuchsia-50",
      border: "border-fuchsia-500",
      text: "text-fuchsia-600",
    },
    {
      bg: "bg-rose-50",
      border: "border-rose-500",
      text: "text-rose-600",
    },
    {
      bg: "bg-rose-50",
      border: "border-rose-500",
      text: "text-rose-600",
    },
  ];

  const getKanbanTheme = (i) => {
    return theme[i % (theme.length - 1)];
  };

  const navigateKanban = (direction) => {
    if (direction === "prev" && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
      console.log(direction);
    } else if (direction === "next" && activeIndex < kanbanCount - 1) {
      setActiveIndex((prev) => prev + 1);
      console.log(direction);
    }
  };

  return (
    <div onClick={() => setActiveIndex(null)}>
      <COMP.Header />
      <div className="grid grid-cols-4 p-6 gap-4 w-full">
        {todos &&
          items &&
          todos.map((e, i) => {
            return (
              <COMP.Kanban
                key={i}
                group={e}
                theme={getKanbanTheme(i)}
                show={activeIndex === i}
                activeContent={activeContent}
                click={() => setActiveIndex(i)}
                setContent={setActiveContent}
                close={() => setActiveIndex(null)}
                navigate={navigateKanban}
                right={(i + 1) % 4 === 0}
                start={i === 0}
                end={i === kanbanCount - 1}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
