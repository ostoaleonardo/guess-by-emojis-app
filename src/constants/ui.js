import images from './images'

export const modes = [
    {
        mode: 'movies',
        title: 'Peliculas',
        emoji: images.popcorn,
        levels: '50',
    },
    {
        mode: 'series',
        title: 'Series',
        emoji: images.television,
        levels: '50',
    },
    {
        mode: 'characters',
        title: 'Personajes',
        emoji: images.alienMonster,
        levels: '50',
    },
    {
        mode: 'videogames',
        title: 'Videojuegos',
        emoji: images.joystick,
        levels: '50',
    },
    {
        mode: 'brands',
        title: 'Marcas',
        emoji: images.packageBox,
        levels: '50',
    },
    {
        mode: 'countries',
        title: 'Paises',
        emoji: images.globe,
        levels: '50',
    }
]

export const powers = [{
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
