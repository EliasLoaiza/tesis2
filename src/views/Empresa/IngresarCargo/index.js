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
 * @function IngresarCargo
 **/
const IngresarCargo = (props) => {
  const [cargo, setcargo] = useState({
    nombre: '', /* eslint-disable-line*/
    descripcion: '', /* eslint-disable-line*/
    codigo: '',
  })
  const handleChange = (e) => {
    setcargo({
      ...cargo,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    cargo.codigo = cargo.nombre[0] + cargo.nombre.length
    if (cargo.nombre === '' || cargo.descripcion === '' || cargo.codigo === ''){ /* eslint-disable-line*/
      alert('Todos los campos son obligatorios')
      return
    }
    const requestInit = {
      method: 'POST',
      body: JSON.stringify(cargo),
      headers: { 'Content-Type': 'application/json' },
    }
    fetch('http://localhost:9000/Cargo', requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res))
    setcargo({
      nombre: '', /* eslint-disable-line*/
      descripcion: '', /* eslint-disable-line*/
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
                    <CFormInput id="nombre" name="nombre" type="text" value={cargo.nombre} onChange={handleChange} placeholder="Nombre del Cargo" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">Descripcion</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CFormTextarea id="descripcion" name="descripcion" type="text" value={cargo.descripcion} onChange={handleChange} rows="3"></CFormTextarea> {/*eslint-disable-line */}
                    </CInputGroup>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">Ingresar Cargo</CButton> {/*eslint-disable-line */}
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
export default IngresarCargo
