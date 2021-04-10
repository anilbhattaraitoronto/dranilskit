import DB from '$lib/database'


export async function post(req) {
   console.log('Context is', req.context)
    const formData = req.body 
    const title = formData.get('title')
    const content = formData.get('content')
    const category_id = formData.get('category_id')
    const thumbnail_url = formData.get('thumbnail_url')
    const newPostId = DB.prepare(`INSERT INTO posts (title, content, category_id, thumbnail_url) VALUES(?, ?, ?,?)`).run(title, content, category_id, thumbnail_url).lastInsertRowid
    if (newPostId) {
         return {
        body: {
            message:`Added new post with id: ${newPostId}`
        }
    }
    }
}
