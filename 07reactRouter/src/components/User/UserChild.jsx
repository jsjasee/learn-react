function UserChild() {
  return (
    <>
      <h1 className="bg-green-400">Hey im a user profile child.</h1>
    </>
  );
}

// note: if there is NO <Outlet /> in User.jsx, then this will not render when i hit the /user/:userId field because it doesn't know where to render in the parent component!

export default UserChild;
