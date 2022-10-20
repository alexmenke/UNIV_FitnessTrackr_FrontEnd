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