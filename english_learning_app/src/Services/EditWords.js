class EditWords {
    static async editWords(id) {
        try {
            const resp = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {method: "Post"})
            const data = await resp.json()
            return data
        }
        catch(error) {
            console.error(error);
        }
    }
}

export default EditWords