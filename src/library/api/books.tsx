import axios from "axios";

export const getBooks = async (bookName: string, pagination: number, sorting: string, category: string) => {
   try {
      const typeCategory = category === "all" ? "" : `+subject:${category}`
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}${typeCategory}&maxResults=${pagination}&orderBy=${sorting}&key=AIzaSyDyPiupcArWZhluKce16sMRCOhkwQ0MfoE`)
      return response.data
   } catch (err) {
      console.error(err)
   }
}
