import DB from '$lib/database'

export async function get({ params }) {
    const { category_id } = params
    const categoryBlogs = DB.prepare(
        `SELECT posts.blog_id, posts.title, posts.slug, categories.name AS category, posts.posted_date, posts.updated_date
        FROM posts
        INNER JOIN categories ON posts.category_id=categories.category_id
        WHERE
        categories.category_id = ?
        `
    ).all(category_id)
    
    if (categoryBlogs) {
        return {
            body: {
                categoryBlogs
            }
        }
    }
}