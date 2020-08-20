const router = require('express').Router()
const { join } = require('path')
const fs = require('fs')
const uuid = require('uuid')

let notes = []
// GET all items
router.get('/notes', (req, res) => {
    res.json(notes)
  fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) { console.log(err) }
    res.json(JSON.parse(data))
  })
})

// POST one item
router.post('/notes', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) { console.log(err) }

    let notes = JSON.parse(data)
    let note = {
        id: uuid.v1(),
        text: req.body.text,
        isDone: req.body.isDone

    }
    notes.push(note)

    fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), err => {
        if (err) { console.log(err) }

        res.json(req.body)

    res.sendStatus(200)
  })
})
})


// PUT one item
router.put('/notes/:text', (req, res) => {

    fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) { console.log(err) }
    
        let notes = JSON.parse(data)

        for (let i = 0; i < notes.length; i++) {
            if (notes[i].text === req.params.text) {
              notes[i].isDone = req.body.isDone
            }
          }
    
        fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), err => {
            if (err) { console.log(err) }
    
        res.sendStatus(200)

})
})
})



//   // DELETE one item
router.delete('/notes/:id', (req, res) => {


    fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) { console.log(err) }
    
        let notes = JSON.parse(data)
        notes = notes.filter(note => note.id !== req.params.id)
    
        fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), err => {
            if (err) { console.log(err) }

            res.sendStatus(200)

})
})
})


  
  module.exports = router
  