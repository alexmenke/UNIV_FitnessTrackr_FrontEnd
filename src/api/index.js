const baseURL = 'https://http://fitnesstrac-kr.herokuapp.com/api'

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username, 
                    password
                }
            })
        })

        const results = await response.json();
        return results;
    } catch (ex) {
        console.log('Error logging in user')
    }
}

export const registerUser = async (username, password) => {
    try {
      const response = await fetch(`${baseURL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      })
      const result = await response.json();
      return result;
    } catch(error) {
      console.log('error registering user')
    }
  }