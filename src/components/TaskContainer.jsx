import { ListTask } from "./ListTask.jsx"
import todoList  from '../tasks.json'

export const TaskContainer = () => {
    return  <ListTask tasks={todoList} />
}