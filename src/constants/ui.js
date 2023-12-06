import images from './images'

export const modes = [
    {
        mode: 'movies',
        title: 'Peliculas',
        description: 'Nuevas y clásicas',
        emoji: images.popcorn,
        levels: '+20 niveles',
    },
    {
        mode: 'series',
        title: 'Series',
        description: 'Populares y de culto',
        emoji: images.television,
        levels: '+20 niveles',
    },
    {
        mode: 'characters',
        title: 'Personajes',
        description: 'De películas y videojuegos',
        emoji: images.alienMonster,
        levels: '+20 niveles',
    },
    {
        mode: 'videogames',
        title: 'Videojuegos',
        description: 'De todas las consolas',
        emoji: images.joystick,
        levels: '+20 niveles',
    },
    {
        mode: 'brands',
        title: 'Marcas',
        description: 'Tus marcas favoritas',
        emoji: images.packageBox,
        levels: '+20 niveles',
    },
    {
        mode: 'countries',
        title: 'Paises',
        description: 'Paises de todo el mundo',
        emoji: images.globe,
        levels: '+20 niveles',
    }
]

export const powers = [{
        id: 1,
        title: 'Una letra',
        description: 'Revela una letra especifica de la palabra',
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
        description: 'Revela la palabra completa',
        price: 50,
        emoji: images.bomb,
    }
]
