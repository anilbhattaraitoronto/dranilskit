import DB from '$lib/database';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authSecret } from '$lib/secrets';


export async function post(request) {

    const { email, password } = request.body;
    if (email && password) {
        
            // check if user with that email already exists
            const user = DB.prepare(`SELECT  * FROM users WHERE email =? AND is_active = 1`).get(email)
            if (user) {
                const result = bcrypt.compareSync(password, user.password)
                if (result === true) {
                    let token = jwt.sign({ fullname:user.fullname, user_id: user.user_id, is_admin: user.is_admin }, authSecret , { expiresIn: '24h' })
                    let maxAge = 24 * 60 * 60
                    let isSecure = process.env.NODE_ENV === 'production' ? true : false;
                    return {
                        headers: {
                            'set-cookie': 
                                `jwt=${token}; Path=/; HttpOnly=true; Max-Age=${maxAge}; Secure=${isSecure};`
                        },
                        body: {
                            user: {
                                fullname: user.fullname,
                                user_id: user.user_id,
                                is_admin:user.is_admin
                            },
                            successMessage:`You have successfully logged in ${user.fullname}`
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
                        errorMessage:"User with that email does not exist or is not active. Please sign up."
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