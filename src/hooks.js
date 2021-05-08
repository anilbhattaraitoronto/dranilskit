import cookie from 'cookie';
import jwt from 'jsonwebtoken'
import { authSecret } from '$lib/secrets'
import DB from '$lib/database.js'


export function getContext({ headers }) {
    const categories = DB.prepare(`SELECT * FROM categories`).all()
    const latestBlogs = DB.prepare(`SELECT * FROM posts ORDER BY posted_date DESC LIMIT 10 `).all()
    const cookies = cookie.parse(headers.cookie || '');
    if (cookies.jwt) {
        const { user_id } = jwt.verify(cookies.jwt, authSecret)
        const user = DB.prepare(`SELECT fullname, user_id, is_admin FROM users WHERE user_id=?`).get(user_id)
        if (user) {
            return {
                user: user,
                categories: categories,
                latestBlogs:latestBlogs
            }
        }
        return {
            
            categories: categories,
            latestBlogs:latestBlogs
        }
    }
    return {
       
        categories: categories,
        latestBlogs:latestBlogs
    }
        
}

export function getSession({ context }) {
    if (context.user) {
         return {
        user: {
                 fullname: context.user?.fullname,
                 user_id: context.user?.user_id,
                is_admin: context.user?.is_admin
             },
             categories: context.categories ? context.categories : [],
             latestBlogs:context.latestBlogs ? context.latestBlogs : []
    }
    }
   
    return {
        user: null,
        categories: context.categories,
        latestBlogs: context.latestBlogs
    }
}