


interface Movie  {
    id: number,
    title: string,
    image: string,
    price: number,
    raiting: number,
}

const movies: Movie[] = [
    {
        id: 1,
        title: "Белоснежка" ,
        image: "https://cinematica.kg/uploads/movies/dc326d27-6703-4583-8bb1-4cf3b11350b4.jpg/1024/800",
        raiting: 5,
        price: 150,
    },
    {
        id:2,
        title: "Махр ",
        image: "https://cinematica.kg/uploads/movies/8db3cfc9-f037-43e1-a95c-cb5e21b33f0b.jpeg/1024/800",
        raiting: 6,
        price: 140,
    },
    {
        id: 3,
        title: "spider man 2002",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/BtsjAgHT9pqHRXtN9FCk7xc8.png",
        raiting: 7.8,
        price: 160,
    },
    {
        id: 4,
        title: "Халк",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/fa/%D0%9D%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D1%8F%D1%82%D0%BD%D1%8B%D0%B9_%D0%A5%D0%B0%D0%BB%D0%BA.jpg/640px-%D0%9D%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D1%8F%D1%82%D0%BD%D1%8B%D0%B9_%D0%A5%D0%B0%D0%BB%D0%BA.jpg",
        raiting: 5.6,
        price: 200,
    },
    {
        id: 5,
        title: "Трансформеры: Месть падших",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1708918153i/202201956.jpg",
        raiting: 7.1,
        price: 180,
    },
    {
        id: 6,
        title: "destiny 2" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaD2Gd_ua6N10i7vTzfOq9AJ7wi9wwJrDwQ&s",
        raiting: 5,
        price: 100,
    },
    {
        id:7,
        title: "Hunter × Hunter ",
        image: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        raiting: 9.1,
        price: 500,
    },
    {
        id: 8,
        title: "Bleach",
        image: "https://m.media-amazon.com/images/M/MV5BMDYyZDEzNzktNDVhNS00MjJiLWJlZjgtY2IzZDY0OTNjMDU3XkEyXkFqcGc@._V1_.jpg",
        raiting: 8.9,
        price: 450,
    },
    {
        id: 9,
        title: "Black Clover",
        image: "https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_.jpg",
        raiting: 8.3,
        price: 200,
    },
    {
        id: 10,
        title: "Wind Breaker ",
        image: "https://shikimori.one/uploads/poster/animes/54900/main_2x-11cfd006fb5541bd055235e62d7b2da9.webp",
        raiting: 7.3,
        price: 400,
    },
]

export default movies;