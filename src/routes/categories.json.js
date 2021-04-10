import DB from '$lib/database'

export async function get() {
    const categories = DB.prepare(`SELECT * FROM categories`).all()
    
    if (categories.length >0) {
        return {
            body: {
                categories: categories
            }
        }
    }
    return {
        body: {
            message:"No categories yet"
        }
    }
}