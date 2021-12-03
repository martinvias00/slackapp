const SearchUser = ({ setstate, value, filtered, members, setmembers }) => {
  const handleAddMember = (e) => {
    e.preventDefault();
    if (value !== "") {
      if (members === null) {
        setmembers([value]);
      } else if (members.lenght === 1) {
        const newList = [members, value];
        setmembers(newList);
      } else {
        const newList = [...members, value];
        setmembers(newList);
      }
    }

    setstate("");
  };
  const handledelete = (e, user) => {
    const newmembers = members.filter((item) => item !== user);
    setmembers(newmembers);
  };

  const renderMembers = () => {
    console.log(members);
    return members.map((user) => (
      <div className="flex justify-center align-middle bg-gray-200 rounded w-min h-min">
        <span className="pr-2">{user}</span>
        <button
          className="bg-gray-300 text-red-500 rounded-full w-6 h-6 font-medium"
          onClick={(e) => handledelete(e, user)}
        >
          x
        </button>
      </div>
    ));
  };
  return (
    <form
      onSubmit={handleAddMember}
      className="mb-8 mt-1 relative rounded-md shadow-sm"
    >
      <h1 className="font-medium">Choose members</h1>
      <datalist id="userList">
        {filtered &&
          filtered.map((user) => {
            return (
              <option key={user.id}>
                {user.email}/{user.id}
              </option>
            );
          })}
      </datalist>
      <fielset className="flex mr-2 justify-items-center">
        <input
          list="userList"
          value={value}
          onChange={({ target: { value } }) => setstate(value)}
          class="block pr-10 shadow border-2 rounded w-full py-2 px-4 text-black-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 transition duration-500 ease-in-out"
          placeholder="Search user by email or id"
          type="text"
        />
        <button
          type="submit"
          className="ml-2 bg-gray-300 h-auto rounded-md self-center top-2 p-1"
        >
          add
        </button>
      </fielset>
      {members && renderMembers()}
    </form>
  );
};

export default SearchUser;
