import Link from "next/link";

const getUser = async (id) => {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
    //  console.log("data ==> ",data)
  return data.result;
};

const Page = async ({params}) => {

  // console.log("params ==>",params.userId)
  const user = await getUser(params.userId);
  // console.log("user ---- ", user);


  return (
    <div>
      <h1>User Detail</h1>
      <h3>Name: {user.name}</h3>

      {/* <ul>
        {usersData.map((item, key) => (
          <li>
            <Link href={`/users/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Page;
