const axios = require('axios')

const getWeapons = async (req, res) => {
    try {
        let allWeapons = []
        const requests = []
        for (let page = 0; page < 4; page ++ ){
            requests.push(axios.get(`https://eldenring.fanapis.com/api/weapons?limit=100&page=${page}`))
        }
        const responses = await Promise.all(requests)
        responses.forEach(response => {
            response.data.data.forEach(weapon => {
                const filteredWeapon = {
                    id: weapon.id,
                    name: weapon.name,
                    image: weapon.image,
                    description: weapon.description,
                    category: weapon.category
                }
                allWeapons.push(filteredWeapon)
            })
        })
        res.json(allWeapons);
    } catch (err) {
        console.error('Erreur lors de la récupération des données : ', err)
        res.status(500).json({ error: "Erreur lors de la récupération des données" })
    }
}

const getWeapon = async (req, res) => {
    try {
        const id = req.params.id
        let request;
        request = axios.get(`https://eldenring.fanapis.com/api/weapons/${id}`)
        const response = await request 
        res.json(response.data)
    } catch (err) {
        console.error('Erreur lors de la récupération des données : ', err)
        res.status(500).json({ error: "Erreur lors de la récupération des données" })
    }
}

module.exports = { getWeapons, getWeapon }