import DB from '$lib/database'
import * as jwt from 'jsonwebtoken';


export async function post(req) {
    //get token
    const adminUser = JSON.parse(req.headers['x-access-token'])
    if (adminUser !== {} && adminUser.is_admin == 1) {
        const formData = req.body
        const title = formData.get('title')
        const content = formData.get('content')
        const category_id = formData.get('category_id')
        const thumbnail_url = formData.get('thumbnail_url')
        const newPostId = DB.prepare(`INSERT INTO posts (title, content, category_id, thumbnail_url) VALUES(?, ?, ?,?)`).run(title, content, category_id, thumbnail_url).lastInsertRowid
        const newBlog = DB.prepare(`SELECT slug FROM posts WHERE blog_id =?`).get(newPostId)

        if (newPostId) {
            return {
                body: {
                    message: `Added new post with id: ${newPostId}`,
                    post_id: newPostId,
                    slug: newBlog.slug
                }
    
            }
        }
    }
            return {
                body: {
                    message: "You need to be staff to add post"
                    
                }
            }
        
        
        
   
    
}