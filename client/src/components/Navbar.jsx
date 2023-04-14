export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-5 bg-gray-300">
        <div className="">VIZTA</div>
        <input className="" type="text" placeholder="Search..." />
        <div className="flex">
          <div className="">Sign In</div>
          <div className="">Sign Up</div>
        </div>
      </nav>
    </>
  );
};
