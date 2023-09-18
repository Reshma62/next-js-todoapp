import RemoveBtn from "./RemoveBtn";
import { LuClipboardEdit } from "react-icons/lu";
export default function AllTaskList({ task, handleEdit }) {
  return (
    <div>
      <h2>All task lists</h2>
      {task.map(({ description, title, _id }) => (
        <div className="flex justify-between items-center bg-slate-300 py-5 px-4 mb-5">
          <div>
            <h2 className="text-2xl capitalize">{title}</h2>
            <p>{description}</p>
          </div>
          <div className="flex gap-5">
            <button onClick={() => handleEdit(_id, description, title)}>
              <LuClipboardEdit onc className="text-2xl" />
            </button>

            <RemoveBtn id={_id} />
          </div>
        </div>
      ))}
    </div>
  );
}

// export default AllTaskList;
