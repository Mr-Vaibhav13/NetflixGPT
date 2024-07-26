export const validationEntry = (email, password) =>{
    const emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const pwdVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    // console.log(emailVal)

    if(emailVal === false) return 'Email is invalid'
    else if(pwdVal === false) return 'Password is invalid'
    
    return null
}    