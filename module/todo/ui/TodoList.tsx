import { Todo } from "../TodoType";
import Pagination from "../../../components/Pagination";
import { useState } from "react";
import TodoClass from "../TodoService";

function TodosComp() {
  const [activePage, setActivePage] = useState(1);
  // const { data: todos } = useTodoService().useTodoQuery(activePage);
  const { data } = TodoClass.getTodo(activePage);
  return (
    <>
      {data?.map((todo: Todo) => (
        <div key={todo.id}>
          <h4>{todo.title}</h4>
        </div>
      ))}
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        pages={2} // Total number of pages
      />
    </>
  );
}
export default TodosComp;
