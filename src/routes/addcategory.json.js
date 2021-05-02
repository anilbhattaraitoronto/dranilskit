import DB from '$lib/database.js'

export async function post(request) {
    const { name } = request.body
    DB.prepare(`INSERT INTO categories (name) VALUES(?)`).run(name)
    const categories = DB.prepare(`SELECT * FROM categories`).all()

    return {
        body: {
            message: `${name} is added as new category`,
            categories
        }
    }

    
}