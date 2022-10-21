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

export const getUserInfo = async (token) => {
    try {
        const response = await fetch(`${baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
        })

        const results = await response.json();
        return results;
    } catch (ex) {
        console.log('Error getting user information')
    }
}