const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM medicamento', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO medicamento set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Medicamento Agregado')
        })
    })
})

routes.delete('/:id_medicamento', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM medicamento WHERE id_medicamento = ?', [req.params.id_medicamento], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Medicamento Eliminado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE medicamento set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Medicamento Actualizado')
        })
    })
})

module.exports = routes