class GetWords {
    static async getWords() {
        try {
            const resp = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            const data = await resp.json();
            return data;
        }
        catch(error) {
            return (
                console.error("Error loading words", error)
            )
        }
    }
}

export default GetWords