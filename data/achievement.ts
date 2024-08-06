export interface Achievement {
    id: number,
    name: string,
    url:string,
    range: number
}

export const getDataAchievement = (): Achievement[] => [
    {
        "id": 1,
        "name": "First Achievement",
        "url": "/static/images/collection/t-shirt-main.png",
        "range": 1
    },
    {
        "id": 2,
        "name": "Second Achievement",
        "url": "/static/images/collection/t-shirt-main.png",
        "range": 2
    },
    {
        "id": 3,
        "name": "Third Achievement",
        "url": "/static/images/collection/t-shirt-main.png",
        "range": 3
    },
    {
        "id": 4,
        "name": "Fourth Achievement",
        "url": "/static/images/collection/t-shirt-main.png",
        "range": 4
    }
]