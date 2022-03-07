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
 * @function IngresarLotes
 **/
const IngresarLotes = (props) => {
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Codigo del Medicamento" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Cantidad de Medicamentos" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Creacion</CFormLabel>
                    </CInputGroup>
                    <CFormInput placeholder="Dia" />
                    <CFormInput placeholder="Mes" />
                    <CFormInput placeholder="Años" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Salida</CFormLabel>
                    </CInputGroup>
                    <CFormInput placeholder="Dia" />
                    <CFormInput placeholder="Mes" />
                    <CFormInput placeholder="Años" />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">Ingresar Lote</CButton>
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
export default IngresarLotes
