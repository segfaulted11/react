import { use } from "react";
import { Link } from "react-router";

const Users = ({ userData }) => {
  const useerData = use(userData);
  console.log(useerData); //array of object

  return (
    <div>
      <h2 className="font-bold text-3xl">users page</h2>
      {useerData.map((eachObject) => (
        <div className="bg-purple-400 py-5 my-5 flex flex-col items-center">
          <div>
            {eachObject.id}. {eachObject.name}
          </div>
          <div>{eachObject.email}</div>
          <div>{eachObject.phone}</div>
          <Link to={`/users/${eachObject.id}`} className="font-bold">
            Show Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
