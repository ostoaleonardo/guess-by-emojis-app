import { fruits, animals, movies, series, characters, videogames, brands, countries,  } from './emojis'
import images from './images'

export const categories = {
    'fruits': {
        name: 'fruits',
        title: 'Frutas',
        emoji: images.apple,
        amount: fruits.length,
        levels: fruits,
    },
    'animals': {
        name: 'animals',
        title: 'Animales',
        emoji: images.flamingo,
        amount: animals.length,
        levels: animals,
    },
    'movies': {
        name: 'movies',
        title: 'Peliculas',
        emoji: images.popcorn,
        amount: movies.length,
        levels: movies,
    },
    'series': {
        name: 'series',
        title: 'Series',
        emoji: images.television,
        amount: series.length,
        levels: series,
    },
    'characters': {
        name: 'characters',
        title: 'Personajes',
        emoji: images.alienMonster,
        amount: characters.length,
        levels: characters,
    },
    'videogames': {
        name: 'videogames',
        title: 'Videojuegos',
        emoji: images.joystick,
        amount: videogames.length,
        levels: videogames,
    },
    'brands': {
        name: 'brands',
        title: 'Marcas',
        emoji: images.packageBox,
        amount: brands.length,
        levels: brands,
    },
    'countries': {
        name: 'countries',
        title: 'Paises',
        emoji: images.globe,
        amount: countries.length,
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
