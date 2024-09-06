import { MdDelete } from "react-icons/md";

const BlogCard = ({ id, title, desc, author, delete: handleDelete }) => {
  return (
    <div className="p-3 border border-gray-500 rounded-md min-w-[200px]">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-sm">{desc}</p>
      <p className="text-xs">{author}</p>
      {handleDelete && (
        <div className="flex justify-end">
          <button className="p-2 border rounded-lg" onClick={() => handleDelete(id)}>
            <MdDelete className="text-lg" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
