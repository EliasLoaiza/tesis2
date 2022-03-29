const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    console.log(req.params.nombre)
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
            conn.query('SELECT * FROM usuario', (err, rows)=>{
                if(err) return res.send(err)
                    res.json(rows)
            })
        })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO usuario set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Usuario Agregado')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM usuario WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Usuario Eliminado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE books set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Usuario Actualizado')
        })
    })
})

module.exports = routes