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
 * @function IngresarEmpresa
 **/
const IngresarEmpresa = (props) => {
  const [empresa, setempresa] = useState({
    rif: 0, /* eslint-disable-line*/
    nombre: '', /* eslint-disable-line*/
    direccion: '', /* eslint-disable-line*/
  })
  const handleChange = (e) => {
    setempresa({
      ...empresa,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    empresa.rif = parseInt(empresa.rif, 10)
    if (empresa.nombre === '' || empresa.rif <= 0 || empresa.direccion === ''){ /* eslint-disable-line*/
      alert('Todos los campos son obligatorios')
      return
    }
    const requestInit = {
      method: 'POST',
      body: JSON.stringify(empresa),
      headers: { 'Content-Type': 'application/json' },
    }
    fetch('http://localhost:9000/Empresa', requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res))
    setempresa({
      rif: 0, /* eslint-disable-line*/
      nombre: '', /* eslint-disable-line*/
      direccion: '', /* eslint-disable-line*/
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
                    <CFormInput id="nombre" name="nombre" type="text" value={empresa.nombre} onChange={handleChange} placeholder="Nombre de la Empresa" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="rif" name="rif" type="number" value={empresa.rif} onChange={handleChange} placeholder="RIF" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">Direccion</CFormLabel> {/*eslint-disable-line */}
                    <CInputGroup className="mb-3">
                      <CFormTextarea id="direccion" name="direccion" type="text" value={empresa.direccion} onChange={handleChange} rows="3"></CFormTextarea> {/*eslint-disable-line */}
                    </CInputGroup>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">Ingresar Empresa</CButton> {/*eslint-disable-line */}
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
export default IngresarEmpresa
