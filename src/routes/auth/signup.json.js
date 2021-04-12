import DB from '$lib/database'
import bcrypt from 'bcrypt';
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);



export async function post(request) {
    const { fullname, email, password, confirmPassword } = request.body;
    if (fullname && email && password && confirmPassword) {
        if (password === confirmPassword) {
            //check if user with that email already exists
            const user = DB.prepare(`SELECT email FROM users WHERE email =?`).get(email)
            if (!user) {
                //create hashedPassword variable
                //use bcrypt to hash password
                //insert hashed password
                const hashedPassword = bcrypt.hashSync(password, salt);
                DB.prepare(`INSERT INTO users (fullname, email, password) VALUES(?,?,?)`).run(fullname, email, hashedPassword)
            return {
                body: {
                    successMessage:`User with ${fullname} added.`
                }
            }
            } else {
                return {
                    body: {
                        errorMessage:"User with that email already exists. Please sign up with another email."
                    }
                }
            }

            
        } else {
            return {
                body: {
                    errorMessage:"All fields are required"
                }
            }
        }
        
    } else {
        return {
            body: {
                errorMessage:"All fields are required"
            }
        }
    }
}