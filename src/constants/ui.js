import { fruits, animals, movies, series, characters, videogames, brands, countries,  } from './emojis'
import images from './images'

export const modes = [
    {
        name: 'fruits',
        title: 'Frutas',
        emoji: images.apple,
        amount: fruits.length,
    },
    {
        name: 'animals',
        title: 'Animales',
        emoji: images.flamingo,
        amount: animals.length,
    },
    {
        name: 'movies',
        title: 'Peliculas',
        emoji: images.popcorn,
        amount: movies.length,
    },
    {
        name: 'series',
        title: 'Series',
        emoji: images.television,
        amount: series.length,
    },
    {
        name: 'characters',
        title: 'Personajes',
        emoji: images.alienMonster,
        amount: characters.length,
    },
    {
        name: 'videogames',
        title: 'Videojuegos',
        emoji: images.joystick,
        amount: videogames.length,
    },
    {
        name: 'brands',
        title: 'Marcas',
        emoji: images.packageBox,
        amount: brands.length,
    },
    {
        name: 'countries',
        title: 'Paises',
        emoji: images.globe,
        amount: countries.length,
    }
]

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
