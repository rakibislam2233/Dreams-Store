import { updated } from "../action"

const updateBook = (bookId,updateBookDetails)=>{
    return async(dispatch)=>{
        const res = await fetch(`http://localhost:8000/books/${bookId}`,{
            method:'PATCH',
            body: JSON.stringify(updateBookDetails),
           headers:{'Content-Type': 'application/json; charset=utf-8'}
        })
        const book = await res.json()
        dispatch(updated(book.id,book))
    }
}
export default updateBook;