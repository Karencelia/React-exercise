import StudentsList from "../component/Student";
import ProductsLists from "../component/Products";
import TaskTracker from "../component/TaskTracker";

export default function StudentApp() {
  return(
    <>
    <div>
    <StudentsList />
    </div>

    <div>
      <ProductsLists />
    </div>
    <TaskTracker />
    </>
  )
}