import React, { useState } from 'react'
import sha256 from 'crypto-js/sha256'
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
 * @function IngresarProceso
 **/
const IngresarProceso = (props) => {
  const [proceso, setproceso] = useState({
    nombre_proceso: '', /* eslint-disable-line*/
    descripcion_proceso: '', /* eslint-disable-line*/
    Id_cargo: 0,
    Id_empresa: 0,
  })
  const handleChange = (e) => {
    setproceso({
      ...proceso,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    proceso.Id_empresa = parseInt(proceso.Id_empresa, 10)
    proceso.Id_cargo = parseInt(proceso.Id_cargo, 10)
    if (proceso.nombre === '' || proceso.descripcion === '' || proceso.Id_cargo <= 0 || proceso.Id_empresa <= 0){ /* eslint-disable-line*/
      alert('Todos los campos son obligatorios')
      return
    }
    const requestInit = {
      method: 'POST',
      body: JSON.stringify(proceso),
      headers: { 'Content-Type': 'application/json' },
    }
    fetch('http://localhost:9000/Proceso', requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res))
    setproceso({
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
                    <CFormInput id="nombre" name="nombre" type="text" value={proceso.nombre} onChange={handleChange} placeholder="Nombre del Proceso" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="codigo" name="codigo" type="text" value={proceso.codigo} onChange={handleChange} placeholder="Codigo de proceso" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">Descripcion</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CFormTextarea id="descripcion" name="descripcion" type="text" value={proceso.descripcion} onChange={handleChange} rows="3"></CFormTextarea> {/*eslint-disable-line */}
                    </CInputGroup>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">Ingresar Proceso</CButton> {/*eslint-disable-line */}
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
export default IngresarProceso
