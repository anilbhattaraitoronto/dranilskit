import cookie from 'cookie';
import jwt from 'jsonwebtoken'
import { authSecret } from '$lib/secrets'
import DB from '$lib/database.js'


export function getContext({ headers }) {
    const categories = DB.prepare(`SELECT * FROM categories`).all()
    const cookies = cookie.parse(headers.cookie || '');
    if (cookies.jwt) {
        const user = jwt.verify(cookies.jwt, authSecret)
        if (user) {
            return {
                user: user,
                categories:categories
            }
        }
        return {
            categories:categories
        }
    }
    return {
        categories:categories
    }
        
}

export function getSession({ context }) {
    console.log('context is', context)
    if (context) {
         return {
        user: {
                 fullname: context.user?.fullname,
                 user_id: context.user?.user_id,
                is_admin: context.user?.is_admin
             },
             categories:context.categories?context.categories: []
    }
    }
   
    return {
        user: null,
        categories
    }
}