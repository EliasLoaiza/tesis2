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
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
/**
 * @author
 * @function IngresarUsuario
 **/
const IngresarUsuario = (props) => {
  const [usuario, setUsuario] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    correo: '',
    telefono: 0,
    tipo: '',
    direccion: '',
    fecha_nacimiento: '',
  })
  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    let fechaNacimiento = document.getElementById('Dia_Nacimiento').value + "-" + document.getElementById('Mes_Nacimiento')/value + "-" + document.getElementById('Año_Nacimiento')/value /* eslint-disable-line*/
    console.log(fechaNacimiento)
    if (usuario.nombre === '' || usuario.cedula === '' || usuario.correo === ''){ /* eslint-disable-line*/
      alert('Los campos de Nombre, Cedula y Correo, son obligatorios')
      return
    }
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
                    <CFormInput id="Nombre" name="nombre" onChange={handleChange} placeholder="Nombres" type="text" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="Apellido" name="apellido" onChange={handleChange} placeholder="Apellidos" type="text" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="Cedula" name="cedula" onChange={handleChange} placeholder="Cedula" type="number" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="Telefono" name="telefono" onChange={handleChange} placeholder="Telefono" type="number" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect id="Tipo_Usuario" name="tipo" onChange={handleChange} aria-label="Default select example" type="text"> {/* eslint-disable-line*/}
                      <option>Selecciona el Tipo de Usuario</option>
                      <option value="Persona Natural">Persona Natural</option>
                      <option value="Trabajador">Trabajador</option>
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="Correo" name="correo" onChange={handleChange} placeholder="Correo" type="email" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">Direccion</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CFormTextarea id="Direccion" name="direccion" onChange={handleChange} rows="3"></CFormTextarea> {/* eslint-disable-line*/}
                    </CInputGroup>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="Codigo_Cargo" onChange={handleChange} placeholder="Codigo del Cargo" type="text" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Nacimiento</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="Dia_Nacimiento" name="Dia_Nacimiento" onChange={handleChange} placeholder="Dia" type="number" /> {/* eslint-disable-line*/}
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
