// class UpdateWords {
//     static async updateWords(id) {
//         try {
//             const resp = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {method: "Post", headers: {"Content-Type": "application/json",}, body: JSON.stringify(this.updateWords)})
//             const data = await resp.json()
//             return data
//         }
//         catch(error) {
//             console.error(error);
//         }
//     }
// }

// export default UpdateWords