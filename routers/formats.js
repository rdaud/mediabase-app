const express = require('express')
const Airtable = require('airtable');
const router = new express.Router()

/**
 * Formats
 */

 const base = new Airtable({apiKey: 'keyrZmwalTky2iuCt'}).base('appo0SrHe4WSkeW8J');



// Read Campaigns
router.get('/formats', async (req,res) => {

    const toReturn = []

        base('Formatos (🔒)')
        .select({

            fields: ['Formato', 'NomeDoFormato', 'Veículo','Tamanho','Meio', 'FormatoDoArquivo' ],
            view: 'Todos',
            maxRecords: 80
            // filterByFormula :`AND(NOT(Confirmed), Token = '${Token}')`,

        }).eachPage( function page(records, next) {

            records.forEach(function(rec) {

                try {
                    toReturn.push(rec)
                } catch (err) {
                    console.error(err);
                }

            })

            try {
                next();
            } catch { 
                return; 
            }

        }, function (e) {

            if (e) {
                return res.status(501).send(e)
            }

            res.send(toReturn)
        })

    

    }
)



module.exports = router