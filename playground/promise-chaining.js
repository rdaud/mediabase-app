require('../src/db/mongoose')
const Campaign = require('../src/models/campaign')


// Campaign.findByIdAndUpdate('614cf86b46d6489ed6b9d41f', { cliente: 'Alcon'})
// .then((campaign) => {
//     console.log(campaign)
//     return Campaign.countDocuments({
//         cliente: 'vVardis'
//     })
// }).then((count)=>{
//     console.log(count)
// }).catch( (e) => {
//     console.log(e)
// })


const updateClientAndCount = async (id,cliente) => {

    const user = await Campaign.findByIdAndUpdate(id,{cliente})
    const count = await Campaign.countDocuments({cliente})

    return count

}


updateClientAndCount('614cf86b46d6489ed6b9d41f','Alcon2')
.then(count => console.log(count))
.catch( e => console.log(e) )