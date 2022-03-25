import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormTextarea,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
/**
 * @author
 * @function IngresarUsuario
 **/
const IngresarUsuario = (props) => {
  const [usuario, setUsuario] = useState({
    cedula: 0, /* eslint-disable-line*/
    nombre: '', /* eslint-disable-line*/
    apellido: '', /* eslint-disable-line*/
    correo: '', /* eslint-disable-line*/
    telefono: 0, /* eslint-disable-line*/
    tipo: '', /* eslint-disable-line*/
    direccion: '', /* eslint-disable-line*/
    fecha_nacimiento: '' /* eslint-disable-line*/
  })
  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
    console.log(e.target.id)
    console.log(e.target.value)
  }
  const handleSubmit = () => {
    usuario.cedula = parseInt(usuario.cedula, 10)
    usuario.telefono = parseInt(usuario.telefono, 10)
    if (usuario.nombre === '' || usuario.cedula <= 0 || usuario.correo === ''){ /* eslint-disable-line*/
      alert('Los campos de Nombre, Cedula y Correo, son obligatorios')
      return
    }
    const requestInit = {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: { 'Content-Type': 'application/json' },
    }
    fetch('http://localhost:9000/Usuario', requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res))
    setUsuario({
      cedula: 1, /* eslint-disable-line*/
      nombre: '', /* eslint-disable-line*/
      apellido: '', /* eslint-disable-line*/
      correo: '', /* eslint-disable-line*/
      telefono: 1, /* eslint-disable-line*/
      tipo: '', /* eslint-disable-line*/
      direccion: '', /* eslint-disable-line*/
      fecha_nacimiento: '' /* eslint-disable-line*/
    })
    alert('Stop')
  }
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <CInputGroup className="mb-3">
                    <CFormInput id="cedula" name="cedula" value={usuario.cedula} onChange={handleChange} placeholder="Cedula" type="number" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="nombre" name="nombre" value={usuario.nombre} onChange={handleChange} placeholder="Nombres" type="text" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="apellido" name="apellido" value={usuario.apellido} onChange={handleChange} placeholder="Apellidos" type="text" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="correo" name="correo" value={usuario.correo} onChange={handleChange} placeholder="Correo" type="email" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="telefono" name="telefono" value={usuario.telefono} onChange={handleChange} placeholder="Telefono" type="number" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect id="tipo_Usuario" name="tipo" value={usuario.tipo} onChange={handleChange} aria-label="Default select example" type="text"> {/* eslint-disable-line*/}
                      <option>Selecciona el Tipo de Usuario</option>
                      <option value="Persona Natural">Persona Natural</option>
                      <option value="Trabajador">Trabajador</option>
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">Direccion</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CFormTextarea id="direccion" name="direccion" value={usuario.direccion} onChange={handleChange} rows="3"></CFormTextarea> {/* eslint-disable-line*/}
                    </CInputGroup>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="Codigo_Cargo" placeholder="Codigo del Cargo" type="text" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Nacimiento</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="fecha_nacimiento" name="fecha_nacimiento" onChange={handleChange} type="date" /> {/* eslint-disable-line*/}
                    <CFormInput id="Mes_Nacimiento" name="Mes_Nacimiento" onChange={handleChange} placeholder="Mes" type="number" /> {/* eslint-disable-line*/}
                    <CFormInput id="Año_Nacimiento" name="Año_Nacimiento" onChange={handleChange} placeholder="Años" type="number" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">Ingresar Usuario</CButton> {/* eslint-disable-line*/}
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
export default IngresarUsuario
