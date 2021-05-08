import DB from '$lib/database'
import * as jwt from 'jsonwebtoken';


export async function post(request) {
    
    //get token
    const adminUser = JSON.parse(request.headers['x-access-token'])
    if (adminUser !== {} && adminUser.is_admin == 1) {
        const { title, content, category_id, thumbnail_url, id } = request.body
        DB.prepare(`UPDATE posts SET title =?, content =?, category_id =?, thumbnail_url=? WHERE blog_id =?`).run(title, content, category_id, thumbnail_url, id)
        const updatedBlog = DB.prepare(`SELECT * FROM posts WHERE blog_id =?`).get(id)
        const latestBlogs = DB.prepare(`SELECT * FROM posts ORDER BY posted_date DESC LIMIT 10 `).all()

            return {
                body: {
                    message: `updated new post with id: ${id}`,
                    post_id: id,
                    updatedBlog,
                    latestBlogs
                }
    
            }
        }
        return {
            body: {
                message: "You need to be staff to add post"
                
            }
        }
        
    
        
        
        
   
    
}