import DB from '$lib/database'

export async function del({ params }) {
    const {id} = params
    DB.prepare(`DELETE FROM posts WHERE blog_id = ?`).run(id)
    const latestBlogs = DB.prepare(`SELECT * FROM posts ORDER BY posted_date DESC LIMIT 10 `).all()

    return {
        body: {
            message: `article with id ${id} is successfully deleted`,
            latestBlogs
        }
    }
}