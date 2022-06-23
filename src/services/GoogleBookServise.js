import { useHttp } from "../hooks/http.hook";

// Хук для доступа к google api. Умеет получать книги по названию, и получать одну книгу по id. А так же сразу перобразует данные в те, что необходимы приложению. 

const useGoogleBookServise = () => {

    const { request } = useHttp();

    const _apiBase = 'https://www.googleapis.com/books/v1/volumes';
    const _apiKey = 'AIzaSyB7kebsaJQApiAKNy6-nBMzyG_p9IwzAnw';

    const getVolumesByTitle = async (title, sortBy = 'relevance', subject = 'all', index = 0) => {
        const categories = subject === 'all'? '' : `+subject:${subject}`;
        const res = await request(`${_apiBase}?q=intitle:${title}${categories}&orderBy=${sortBy}&startIndex=${index}&maxResults=30&key=${_apiKey}`);
        if(res.items){
            return res.items.map(_transformBook);
        } else {
            return [];
        }

    }

    const getVolumesTotalItems = async (title, sortBy = 'relevance', subject = 'all', index = 0) => {
        const categories = subject === 'all'? '' : `+subject:${subject}`;
        const res = await request(`${_apiBase}?q=intitle:${title}${categories}&orderBy=${sortBy}&startIndex=${index}&maxResults=30&key=${_apiKey}`);
        return res.totalItems;
    }

    const getVolumeById = async (id) => {
        const res = await request(`${_apiBase}/${id}`);
        return _transformBook(res);
    }

    const _transformBook = (book) => {
        return {
            id: book.id,
            etag: book.etag,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            categories: book.volumeInfo.categories,
            description: book.volumeInfo.description ? book.volumeInfo.description : 'There is no description for this book',
            thumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail: 'Image did not find'
        }
    }

    return { getVolumesByTitle, getVolumeById, getVolumesTotalItems }

}

export default useGoogleBookServise;