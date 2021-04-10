import DB from '$lib/database'

export async function get() {
    let articles = DB.prepare(`
    SELECT
    posts.blog_id, categories.category_id, categories.name AS category, posts.title, posts.slug, posts.summary, posts.posted_date, posts.updated_date
    FROM posts
    INNER JOIN categories ON posts.category_id=categories.category_id
    ORDER BY posted_date DESC  LIMIT 30;`).all()

    if (articles) {
        return {
            body: {
                articles
            }
        }
    }
    return {
        body: {
            message:"Articles do not exist for now"
        }
    }
}
