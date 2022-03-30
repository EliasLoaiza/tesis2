const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM proceso, cargo_proceso, cargo WHERE proceso.id_proceso = cargo_proceso.Id_proceso AND cargo.id_cargo = cargo_proceso.Id_cargo', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO proceso set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Proceso Agregado')
        })
    })
})

routes.delete('/:id_proceso', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM proceso WHERE id_proceso = ?', [req.params.id_proceso], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Proceso Eliminado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE proceso set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Proceso Actualizado')
        })
    })
})

module.exports = routes