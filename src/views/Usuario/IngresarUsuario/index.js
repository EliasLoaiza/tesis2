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
    cedula_usuario: 0, /* eslint-disable-line*/
    nombre_usuario: '', /* eslint-disable-line*/
    apellido_usuario: '', /* eslint-disable-line*/
    correo_usuario: '', /* eslint-disable-line*/
    telefono_usuario: 0, /* eslint-disable-line*/
    tipo_usuario: '', /* eslint-disable-line*/
    direccion_usuario: '', /* eslint-disable-line*/
    fecha_nacimiento_usuario: '', /* eslint-disable-line*/
    id_empresa: 0, /* eslint-disable-line*/
    id_cargo: 0 /* eslint-disable-line*/
  })
  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    usuario.cedula = parseInt(usuario.cedula_usuario, 10)
    usuario.telefono = parseInt(usuario.telefono_usuario, 10)
    usuario.Id_empresa = parseInt(usuario.Id_empresa, 10)
    usuario.Id_cargo = parseInt(usuario.Id_cargo, 10)
    if (usuario.nombre_usuario === '' || usuario.cedula_usuario <= 0 || usuario.correo_usuario === ''){ /* eslint-disable-line*/
      alert('Los campos de Nombre, Cedula y Correo, son obligatorios')
      return
    }
    if(usuario.Id_empresa <= 0 || usuario.Id_cargo <= 0){ /* eslint-disable-line*/
      usuario.Id_empresa = 5
      usuario.Id_cargo = 7
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
      cedula_usuario: 0, /* eslint-disable-line*/
      nombre_usuario: '', /* eslint-disable-line*/
      apellido_usuario: '', /* eslint-disable-line*/
      correo_usuario: '', /* eslint-disable-line*/
      telefono_usuario: 0, /* eslint-disable-line*/
      tipo_usuario: '', /* eslint-disable-line*/
      direccion_usuario: '', /* eslint-disable-line*/
      fecha_nacimiento_usuario: '', /* eslint-disable-line*/
      Id_empresa: 0, /* eslint-disable-line*/
      Id_cargo: 0 /* eslint-disable-line*/
    })
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
                    <CFormInput id="cedula_usuario" name="cedula_usuario" value={usuario.cedula_usuario} onChange={handleChange} placeholder="Cedula" type="number" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="nombre_usuario" name="nombre_usuario" value={usuario.nombre_usuario} onChange={handleChange} placeholder="Nombres" type="text" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="apellido_usuario" name="apellido_usuario" value={usuario.apellido_usuario} onChange={handleChange} placeholder="Apellidos" type="text" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="correo_usuario" name="correo_usuario" value={usuario.correo_usuario} onChange={handleChange} placeholder="Correo" type="email" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="telefono_usuario" name="telefono_usuario" value={usuario.telefono_usuario} onChange={handleChange} placeholder="Telefono" type="number" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect id="tipo_usuario" name="tipo_usuario" value={usuario.tipo_usuario} onChange={handleChange} aria-label="Default select example" type="text"> {/* eslint-disable-line*/}
                      <option>Selecciona el Tipo de Usuario</option>
                      <option value="Persona Natural">Persona Natural</option>
                      <option value="Trabajador">Trabajador</option>
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">Direccion</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CFormTextarea id="direccion_usuario" name="direccion_usuario" value={usuario.direccion_usuario} onChange={handleChange} rows="3"></CFormTextarea> {/* eslint-disable-line*/}
                    </CInputGroup>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="Id_empresa" name="Id_empresa" onChange={handleChange} placeholder="Codigo de la Empresa" type="number" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="Id_cargo" name="Id_cargo" onChange={handleChange} placeholder="Codigo del Cargo" type="number" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Nacimiento</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="fecha_nacimiento_usuario" name="fecha_nacimiento_usuario" onChange={handleChange} type="date" /> {/* eslint-disable-line*/}
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
