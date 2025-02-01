export const checkValidData = (email,password, fullName) => {
    const isEmailValid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isNameValidate = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullName)

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!isNameValidate) return "Full name is not valid"

    return null
}