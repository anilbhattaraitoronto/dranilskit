import jwt from 'jsonwebtoken';
import { emailSecret } from '$lib/secrets';
import DB from '$lib/database.js'

export async function get({ params }) {
    const { token } = params
    try {
        const decoded = jwt.verify(token, emailSecret)
        const { newUserId } = decoded;
        DB.prepare('UPDATE users set is_active = 1 WHERE user_id =?').run(newUserId)
        //do something here in the database. 
        return {
            body: {
                message: "Your account is activated. Please login now."
            }
        }
    } catch (err) {
        return {
            body: {
                message:'Token is invalid or expired. Please request a new token.'
            }
        }
    }
    
   
    
   
   
}