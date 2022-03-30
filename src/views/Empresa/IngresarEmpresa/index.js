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
    rif_empresa: 0, /* eslint-disable-line*/
    nombre_empresa: '', /* eslint-disable-line*/
    direccion_empresa: '', /* eslint-disable-line*/
    Id_usuario: 0, /* eslint-disable-line*/
    Id_cargo: 0, /* eslint-disable-line*/
    Id_proceso: 0, /* eslint-disable-line*/
  })
  const handleChange = (e) => {
    setempresa({
      ...empresa,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    empresa.rif_empresa = parseInt(empresa.rif_empresa, 10)
    empresa.Id_usuario = parseInt(empresa.Id_usuario, 10)
    empresa.Id_cargo = parseInt(empresa.Id_cargo, 10)
    empresa.Id_proceso = parseInt(empresa.Id_proceso, 10)
    if (empresa.nombre_empresa === '' || empresa.rif_empresa <= 0 || empresa.direccion_empresa === ''){ /* eslint-disable-line*/
      alert('Los Campos de Nombre, RIF y Direccion son Obligatorios')
      return
    }
    if(empresa.Id_proceso <= 0 || empresa.Id_cargo <= 0 || empresa.Id_usuario <= 0){ /* eslint-disable-line*/
      empresa.Id_proceso = 5
      empresa.Id_cargo = 7
      empresa.Id_usuario = 27
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
      rif_empresa: 0, /* eslint-disable-line*/
      nombre_empresa: '', /* eslint-disable-line*/
      direccion_empresa: '', /* eslint-disable-line*/
      Id_usuario: 0, /* eslint-disable-line*/
      Id_cargo: 0, /* eslint-disable-line*/
      Id_proceso: 0, /* eslint-disable-line*/
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
                    <CFormInput id="nombre_empresa" name="nombre_empresa" type="text" value={empresa.nombre_empresa} onChange={handleChange} placeholder="Nombre de la Empresa" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput id="rif_empresa" name="rif_empresa" type="number" value={empresa.rif_empresa} onChange={handleChange} placeholder="RIF" /> {/*eslint-disable-line */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">Direccion</CFormLabel> {/*eslint-disable-line */}
                    <CInputGroup className="mb-3">
                      <CFormTextarea id="direccion_empresa" name="direccion_empresa" type="text" value={empresa.direccion_empresa} onChange={handleChange} rows="3"></CFormTextarea> {/*eslint-disable-line */}
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
