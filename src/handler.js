const nanoid  = require('nanoid');
const books = require('./books');

const addBoookHandler = (request, h) => {

const {name,year,author,summary,publisher,pageCount,readPage,reading} = request.payload;
const id = nanoid(16)
const insertedAt = new Date().toISOString()
const updatedAt = insertedAt
const finished =  pageCount === readPage

const newBook = {

    name,year,author,summary,publisher,pageCount,readPage,reading,id,insertedAt,updatedAt,finished
}

books.push(newBook);

const isSuccess = books.filter((book) => book.id ===id).length > 0;

if (isSuccess) {
    const response = h.response({
        status : 'success',
        message:'buku berhasil ditambahkan',
        data: {
            bookId: id,
        },
    })

    response.code(201);
    return response
}

    const response = h.response({
      status : 'fail',
      message:'buku gagal ditambahkan'
    })
    response.code(500)
    return response;

}

const getAllBooksHandler = () => ({
    
})

module.exports = {addBoookHandler}