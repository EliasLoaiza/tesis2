const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM lote, empresa, usuario, medicamento WHERE lote.Id_usuario = usuario.id_usuario AND lote.Id_empresa = empresa.id_empresa AND lote.Id_medicamento = medicamento.id_medicamento', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    console.log(req.body)
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO lote set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Lote Agregado')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM lote WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Lote Eliminado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE lote set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Lote Actualizado')
        })
    })
})

module.exports = routes