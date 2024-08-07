export interface Achievement {
    id: number,
    name: string,
    url:string,
    range: number
}

export const getDataAchievement = (): Achievement[] => [
    {
        "id": 1,
        "name": "La camiseta de la empresa",
        "url": "/static/images/collection/shirt.webp",
        "range": 1
    },
    {
        "id": 2,
        "name": "Pizza para desayunar",
        "url": "/static/images/collection/pizza.webp",
        "range": 2
    },
    {
        "id": 3,
        "name": "En mi compu no sirve",
        "url": "/static/images/collection/compu.webp",
        "range": 3
    },
    {
        "id": 4,
        "name": "Bono de productividad",
        "url": "/static/images/collection/tickets.webp",
        "range": 4
    },
    {
        "id": 5,
        "name": "Atrápalos a todos",
        "url": "/static/images/collection/pikachu.webp",
        "range": 4
    },
    {
        "id": 6,
        "name": "Te toca desplegar en viernes",
        "url": "/static/images/collection/cry.webp",
        "range": 4
    },
    {
        "id": 7,
        "name": "Ya sé que estás de vacaciones pero...",
        "url": "/static/images/collection/beach-cry.webp",
        "range": 4
    },
    {
        "id": 8,
        "name": "Me gustó tu proyecto",
        "url": "/static/images/collection/thief.webp",
        "range": 4
    },
    {
        "id": 9,
        "name": "Fiesta sorpresa",
        "url": "/static/images/collection/party.webp",
        "range": 4
    },
]