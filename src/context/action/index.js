import { useReducer } from "react";
import Reducer from "../reducer";
import Context from "../index";
import * as TP from "../type";

const TodoAction = ({ children }) => {
  const initialState = {
    todos: [],
    items: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);
  const { todos, items } = state;

  const token = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNzcsImV4cCI6MTY5NzM3MTQ4OH0.ICpzotxoV4kxAfgJvYqgcbil-UHcvSz8Ju9KdMRLWb0`;

  const url = "https://todo-api-18-140-52-65.rakamin.com";

  async function findGroup() {
    try {
      const todosResponse = await fetch(`${url}/todos`, {
        headers: {
          Authorization: token,
        },
      });
      const todosData = await todosResponse.json();
      dispatch({ type: TP.FIND_GROUP, payload: todosData });

      const itemPromises = todosData.map((todo) => {
        return fetch(`${url}/todos/${todo.id}/items`, {
          headers: {
            Authorization: token,
          },
        }).then((res) => res.json());
      });

      const [...itemResults] = await Promise.all(itemPromises);
      const newArray = itemResults.map((e) => {
        const arr = {
          objects: e,
        };
        return arr.objects;
      });

      const item = [];
      newArray.forEach((e) => {
        e.forEach((el) => {
          item.push(el);
        });
      });

      dispatch({ type: TP.FIND_ITEM, payload: item });
    } catch (error) {
      console.error(error);
    }
  }

  async function createGroup(payload, setpayload) {
    await fetch(`${url}/todos`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        findGroup()
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function createItem(groupId, payload) {
    console.log(groupId);
    await fetch(`${url}/todos/${groupId}/items`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        findGroup();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function editItem(id, groupId, payload) {
    await fetch(`${url}/todos/${groupId}/items/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        findGroup();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function deleteItem(id, groupId) {
    await fetch(`${url}/todos/${groupId}/items/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then(() => {
        dispatch({
          type: TP.DELETE_ITEM,
          payload: id,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <Context.Provider
      value={{
        todos,
        items,
        deleteItem,
        createItem,
        findGroup,
        createGroup,
        editItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TodoAction;
