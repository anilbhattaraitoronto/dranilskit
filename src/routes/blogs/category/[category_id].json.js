import DB from '$lib/database'

export async function get({ params }) {
    const { category_id } = params
    const categoryBlogs = DB.prepare(
        `SELECT posts.blog_id, posts.title, categories.name AS category
        FROM posts
        INNER JOIN categories ON posts.category_id=categories.category_id
        WHERE
        categories.category_id = ?
        `
    ).all(category_id)
    console.log('category is', category_id, categoryBlogs)
    if (categoryBlogs) {
        return {
            body: {
                categoryBlogs
            }
        }
    }
}