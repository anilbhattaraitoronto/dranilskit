import cookie from 'cookie';
import jwt from 'jsonwebtoken'
import {authSecret} from '$lib/secrets'


export function getContext({ headers }) {
    const cookies = cookie.parse(headers.cookie || '');
    if (cookies.jwt) {
        const user = jwt.verify(cookies.jwt, authSecret)
        if (user) {
            return {
                user:user
            }
        }
        return {}
    }
    return {}
        
}

export function getSession({ context }) {
    if (context !== {}) {
         return {
        user: {
                 fullname: context.user?.fullname,
                 user_id: context.user?.user_id,
                is_admin: context.user?.is_admin
        }
    }
    }
   
    return {
        user:null
    }
}