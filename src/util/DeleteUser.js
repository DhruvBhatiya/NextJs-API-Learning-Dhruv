"use client";

const DeleteUser = (props) => {
  const userId = props.id;
  
  const deleteuser = async () => {
    console.log(userId);
    let result = await fetch("http://localhost:3000/api/users/" + userId, {
      method: "delete",
    });
    result = await result.json();

    if (result.success) {
      alert("User is Deleted");
    } else {
      alert("Error, User is not delete");
    }
  };
  return (
    <div>
      <button onClick={deleteuser}>Delete</button>
    </div>
  );
};

export default DeleteUser;
