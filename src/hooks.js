import cookie from 'cookie';
import jwt from 'jsonwebtoken'
import { authSecret } from '$lib/secrets'
import DB from '$lib/database.js'


export async function handle({ request, render }) {
    const categories = DB.prepare(`SELECT * FROM categories`).all()
    const latestBlogs = DB.prepare(`SELECT * FROM posts ORDER BY posted_date DESC LIMIT 10 `).all()
    const cookies = cookie.parse(request.headers.cookie || '');
    if (cookies.jwt) {
        const user = jwt.verify(cookies.jwt, authSecret)
            request.locals.user = user;
    }
        
        request.locals.categories = categories;
        request.locals.latestBlogs = latestBlogs;
        const response = await render(request)
        
   
   return response
        
}

export function getSession(request) {
    if (request.locals.user) {
         return {
        user: request.locals.user,
        categories: request.locals.categories ? request.locals.categories : [],
        latestBlogs:request.locals.latestBlogs ? request.locals.latestBlogs : []
    }
    }
   
    return {
        categories: request.locals.categories ? request.locals.categories : [],
        latestBlogs:request.locals.latestBlogs ? request.locals.latestBlogs : []
    }
}