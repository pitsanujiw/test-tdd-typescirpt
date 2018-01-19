const getUser = () => {
    setTimeout(() => {
      return {name: 'Max'}
    }, 2000);
  };

  const user = getUser(); // This doesn't actually fetch the user
  console.log(user);