import DB from '$lib/database'

export async function get() {
    let articles =  DB.prepare(`SELECT * FROM posts;`).all()

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
