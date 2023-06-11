import { makeAutoObservable, runInAction } from 'mobx';

const getWords = () => fetch("http://itgirlschool.justmakeit.ru/api/words")
.then((resp) => {
    if (resp.ok) {
        return resp.json()
    }
    throw new Error("Что-то пошло не так...")
})
.then((resp) => resp)

export default class WordsStore {
    words = []
    isLoading = false
    isLoaded = false
    error = null

    constructor() {
        makeAutoObservable(this)
    }

    loadData = async() => {
        if (this.isLoaded || this.isLoading) {
            return
        }
        this.isLoading = true
        const result = await getWords().catch((error) => (this.error = error))

        runInAction(() => {
            this.words = result
            this.isLoading = false
            this.isLoaded = false
        })
    }

    editWord = async(word) => {
        await fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`, {
            method: 'POST',
            body: JSON.stringify(word)
        })
        .then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
            throw new Error("Что-то пошло не так...")
        })
        .catch((error) => (this.error = error))

        runInAction(() => {
            this.loadData()
        })
    }
}
