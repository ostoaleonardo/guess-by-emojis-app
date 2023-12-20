import { fruits, animals, movies, series, characters, videogames, brands, countries } from './emojis'
import images from './images'

export const categories = {
    'fruits': {
        title: 'Frutas',
        emoji: images.apple,
        levels: fruits,
    },
    'animals': {
        title: 'Animales',
        emoji: images.flamingo,
        levels: animals,
    },
    'movies': {
        title: 'Peliculas',
        emoji: images.popcorn,
        levels: movies,
    },
    'series': {
        title: 'Series',
        emoji: images.television,
        levels: series,
    },
    'characters': {
        title: 'Personajes',
        emoji: images.alienMonster,
        levels: characters,
    },
    'videogames': {
        title: 'Videojuegos',
        emoji: images.joystick,
        levels: videogames,
    },
    'brands': {
        title: 'Marcas',
        emoji: images.packageBox,
        levels: brands,
    },
    'countries': {
        title: 'Paises',
        emoji: images.globe,
        levels: countries,
    }
}

export const powers = [
    {
        id: 1,
        title: 'Una letra',
        description: 'Revela una letra especifica de la respuesta',
        price: 20,
        emoji: images.magnifyingGlass,
    },
    {
        id: 2,
        title: 'Eliminar letras',
        description: 'Elimina las letras que no estan en su posición correcta',
        price: 30,
        emoji: images.wastebasket,
    },
    {
        id: 3,
        title: 'Revelar',
        description: 'Revela la respuesta completa',
        price: 50,
        emoji: images.bomb,
    }
]
