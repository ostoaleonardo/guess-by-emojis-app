import { movies, series, characters, videogames, brands, countries } from '../constants'

export const getMode = (param) => {
    let title
    let levels

    switch (param) {
        case 'movies':
            title = 'Películas'
            levels = movies
            break
        case 'series':
            title = 'Series'
            levels = series
            break
        case 'characters':
            title = 'Personajes'
            levels = characters
            break
        case 'videogames':
            title = 'Videojuegos'
            levels = videogames
            break
        case 'brands':
            title = 'Marcas'
            levels = brands
            break
        case 'countries':
            title = 'Países'
            levels = countries
            break
        default:
            levels = []
    }

    return { title, levels }
}