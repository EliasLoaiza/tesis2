const usuario = require('./Components/Usuario')
const empresa = require('./Components/Empresa')
const medicamento = require('./Components/Medicamento')
const lote = require('./Components/Lote')
const proceso = require('./Components/Proceso')
const cargo = require('./Components/Cargo')

const routes = (app) => {
    app.use("/Usuario", usuario)
    app.use("/Empresa", empresa)
    app.use("/Medicamento", medicamento)
    app.use("/Lote", lote)
    app.use("/Proceso", proceso)
    app.use("/Cargo", cargo)
}
module.exports = routes;