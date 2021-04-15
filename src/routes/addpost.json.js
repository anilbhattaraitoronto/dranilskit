import DB from '$lib/database'
import * as jwt from 'jsonwebtoken';


export async function post(req) {
    //get token
    const accessToken = req.headers['x-access-token']
    if (accessToken) {
        //verify token begins
        jwt.verify(accessToken, 'secret', (err, decoded) => {
            if (err) {
                console.log(err)
            }
            const { is_admin } = decoded;
            if (is_admin === true) {
                const formData = req.body
        const title = formData.get('title')
        const content = formData.get('content')
        const category_id = formData.get('category_id')
        const thumbnail_url = formData.get('thumbnail_url')
        const newPostId = DB.prepare(`INSERT INTO posts (title, content, category_id, thumbnail_url) VALUES(?, ?, ?,?)`).run(title, content, category_id, thumbnail_url).lastInsertRowid
        // if block begins
        if (newPostId) {
            return {
                body: {
                    message: `Added new post with id: ${newPostId}`
                }
    
            }
        }
        // if block ends
            }
            return {
                body: {
                    message:"You need to be staff to add post"
                }
            }
        })
        // verify token ends
        
   
    }
}