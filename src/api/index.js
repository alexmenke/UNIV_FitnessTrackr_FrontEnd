const baseURL = 'http://fitnesstrac-kr.herokuapp.com/api'

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
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

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('error registering user')
  }
}

export const getRoutines = async () => {
  try {
    const response = await fetch(`${baseURL}/routines`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const results = await response.json();
    return results;
  } catch (ex) {
    console.log('Error getting all public routines')
  }
}

export const addNewRoutine = async (token, { name, goal, isPublic }) => {
  try {
    const response = await fetch(`${baseURL}/routines`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      })
    })
    const results = response.json();
    return results
  } catch (ex) {
    console.log('Error adding new routine')
  }
}

export const getMyRoutines = async (token, user) => {
  try {
    const response = await fetch(`${baseURL}/users/${user}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const results = response.json();
    return results;
  } catch (ex) {
    console.log('Error getting my routines')
  }
}

export const updateRoutine = async ({ token, name, goal, isPublic, activities, routineId }) => {
  try {
    const response = await fetch(`${baseURL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
        activities: activities
      })
    })
    const results = response.json();
    // console.log('testing updateRoutine', results)
    return results
  } catch (ex) {
    console.log('Error updating routine.')
  }
}

export const deleteRoutine = async (token, routineId) => {
  try {
    const response = await fetch(`${baseURL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const results = response.json();
    return results
  } catch (ex) {
    console.log('Error deleting routine')
  }
}

export const addActivityToRoutine = async (routineId, { activityId, count, duration }) => {
  try {
    const response = await fetch(`${baseURL}/routines/${routineId}/activities`, {
      method: "POST",
      body: JSON.stringify({
        activityId: activityId,
        count: count,
        duration: duration
      })
    })
    const results = response.json();
    return results
  } catch (ex) {
    console.log('Error adding activitiy to routine')
  }
}

export const getActivities = async () => {
  try {
    const response = await fetch(`${baseURL}/activities`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const results = await response.json()
    return results
  } catch (error) {
    console.log('error getting activities')
  }
}

export const createActivity = async ({ token, name, description, count, duration }) => {
  try {
    const response = await fetch(`${baseURL}/activities`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        description: description,
        count: count,
        duration: duration
      })
    })
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('error during createActivity')
  }
}

export const updateActivity = async ({ token, activityId, name, description }) => {
  try {
    const response = await fetch(`${baseURL}/activities/${activityId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        description: description,
      })
    })
    const result = await response.json();
    return result
  } catch (error) {
    console.log('error during updateActivity')
  }
}

export const updateRoutineActivity = async (count, duration) => {
  try {
    const response = await fetch(`${baseURL}/routine_activities/:routineActivityId`, {
      method: "PATCH",
      body: JSON.stringify({
        count: count,
        duration: duration
      })
    })
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Error updating routine activity.')
  }
}

export const deleteRoutineActivity = async (token) => {
  try {
    const response = await fetch(`${baseURL}/routine_activities/:routineActivityId`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    const result = response.json();
    return result
  } catch (error) {
    console.log('Error deleting routine activity')
  }
}