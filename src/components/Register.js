//This route is used to create a new user account. On success, you will be given a JSON Web Token to be passed to the server for requests requiring authentication.
fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'superman27',
    password: 'krypt0n0rbust'
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);