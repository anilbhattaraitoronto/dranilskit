import DB from '$lib/database'

export async function get({ params }) {
    const { id } = params;
    const article = DB.prepare(`SELECT * FROM posts WHERE id =?`).get(id)
    if (article) {
        return {
            body: {
                article
            }
        }
    }
}