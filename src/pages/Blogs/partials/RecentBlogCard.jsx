/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const RecentBlogCard = ({ blog }) => {
  return (
    <>
      <NavLink to={blog.href} className={"flex gap-x-3 group"}>
        <figure className="overflow-hidden">
          <img
            src={`../../../../images/blogs/${blog.image}`}
            alt={blog.title}
            className="w-32 h-full object-cover group-hover:scale-125 transition-all duration-500"
          />
        </figure>
        <div>
          <h3 className="font-semibold text-md mb-0 text-primary group-hover:text-secondary transition-all duration-500">
            {blog.title.length > 22
              ? `${blog.title.slice(0, 22)}...`
              : blog.title}
          </h3>
          <p className="text-sm text-gray-400">
            {blog.description.length > 45
              ? `${blog.description.slice(0, 45)}...`
              : blog.description}
          </p>
        </div>
      </NavLink>
    </>
  );
};

export default RecentBlogCard;
