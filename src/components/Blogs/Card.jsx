/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Card = ({ blog }) => {
  return (
    <>
      <NavLink to={blog.href} className={"block border rounded-xl group"}>
        <figure className="overflow-hidden">
          <img
            src={`../../../../images/blogs/${blog.image}`}
            alt={blog.title}
            className="rounded-t-xl group-hover:scale-125 transition-all duration-500"
          />
        </figure>
        <div className="p-5">
          <h2 className="font-semibold text-xl mb-2 text-primary group-hover:text-secondary transition-all duration-500">
            {blog.title}
          </h2>
          <p className="text-md text-gray-500">{blog.description}</p>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
