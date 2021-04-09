import DB from '$lib/database'

export async function del({ params }) {
    const {id} = params
    DB.prepare(`DELETE FROM posts WHERE id = ?`).run(id)

    return {
        body: {
            message:`article with id ${id} is successfully deleted`
        }
    }
}