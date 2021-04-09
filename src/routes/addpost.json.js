import DB from '$lib/database'


export async function post(req) {
   
    const formData = req.body 
    const title = formData.get('title')
    const content = formData.get('content')
    const newPostId = DB.prepare(`INSERT INTO posts (title, content) VALUES(?, ?)`).run(title, content).lastInsertRowid
    if (newPostId) {
         return {
        body: {
            message:`Added new post with id: ${newPostId}`
        }
    }
    }
}
