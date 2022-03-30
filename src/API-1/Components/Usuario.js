const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
            conn.query('SELECT * FROM usuario', (err, rows)=>{
                if(err) return res.send(err)
                    res.json(rows)
            })
        })
})

routes.post('/', (req, res)=>{
    console.log(req.body)
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO usuario set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Usuario Agregado')
        })
    })
})

routes.delete('/:id_usuario', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM usuario WHERE id_usuario = ?', [req.params.id_usuario], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Usuario Eliminado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE books set ? WHERE id = ?', [req.body, req.params.id_usuario], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Usuario Actualizado')
        })
    })
})

module.exports = routes