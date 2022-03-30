const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM empresa, cargo WHERE cargo.Id_empresa = empresa.id_empresa', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO cargo set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Cargo Agregado')
        })
    })
})

routes.delete('/:id_cargo', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM cargo WHERE id_cargo = ?', [req.params.id_cargo], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Cargo Eliminado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE cargo set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Cargo Actualizado')
        })
    })
})

module.exports = routes