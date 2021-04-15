import DB from '$lib/database';
import bcrypt from 'bcrypt';
import {sign} from 'jsonwebtoken';
// const saltRounds = 10;
// const salt = bcrypt.genSaltSync(saltRounds);



export async function post(request) {
    const { email, password } = request.body;
    if (email && password) {        
            //check if user with that email already exists
            const user = DB.prepare(`SELECT  * FROM users WHERE email =?`).get(email)
            if (user) {
                const result = bcrypt.compareSync(password, user.password)
                if (result === true) {
                    let token = sign({ user_id: user.user_id, is_admin:true }, 'secret', { expiresIn: '1h' })
                    console.log(token)
                    return {
                body: {
                    fullname:user.fullname,
                            email: user.email,
                            is_admin: true,
                        token
                }
            }
                } else {
                    return {
                        body: {
                            errorMessage: `Invalid password. Please try again.`
                        }
                    }
                }
            
            } else {
                return {
                    body: {
                        errorMessage:"User with that email does not exist. Please sign up."
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