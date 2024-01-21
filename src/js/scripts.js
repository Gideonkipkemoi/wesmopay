const getUsers = () => {
    const users = JSON.parse(localStorage.getItem('users')) || { users: [] };
    return users.users;
  };
  
  const addUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify({ users }));
  };
  
  const getUserByType = (type) => {
    const users = getUsers();
    return users.filter((user) => user.type === type);
  };
  
  export { getUsers, addUser, getUserByType };
  