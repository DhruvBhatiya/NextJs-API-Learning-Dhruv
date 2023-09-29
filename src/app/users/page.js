import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";

const getUsers = async () => {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
  //    console.log("data ==> ",data)
};

const Page = async () => {
  const usersData = await getUsers();
  // console.log("usersData ---- ", usersData);
  return (
    <div>
      <h1>User List...</h1>
      <ul>
        {usersData.map((item, key) => (
          <li key={key} className="w-96 flex justify-between">
            <span className="w-40">
              <Link href={`/users/${item.id}`}>{item.name}</Link>
            </span>
            <span>
              <Link href={`/users/${item.id}/update`}>Edit</Link>
            </span>
            <DeleteUser id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
