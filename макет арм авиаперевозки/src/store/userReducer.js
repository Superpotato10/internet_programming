export default function userReducer(user, action) {
    switch (action.type) {
        case 'login': {
            const newUser = {
                username: action.username, 
                loginDate: new Date()
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            return newUser
        }
        case 'logout': {
            localStorage.removeItem('user')
            return null
        }
    }
}