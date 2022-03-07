import React from 'react'
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
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Nombres" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Apellidos" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Cedula" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Telefono" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect aria-label="Default select example">
                      <option>Selecciona el Tipo de Usuario</option>
                      <option value="Persona Natural">Persona Natural</option>
                      <option value="Trabajador">Trabajador</option>
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Correo" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlTextarea1">Direccion</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                    </CInputGroup>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Codigo del Cargo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Nacimiento</CFormLabel>
                    </CInputGroup>
                    <CFormInput placeholder="Dia" />
                    <CFormInput placeholder="Mes" />
                    <CFormInput placeholder="Años" />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">Ingresar Usuario</CButton>
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
