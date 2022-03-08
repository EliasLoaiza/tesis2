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
  CTable,
  CTableBody,
  CTableHeaderCell,
  CTableHead,
  CTableDataCell,
  CTableFoot,
  CTableRow,
  CTableCaption,
} from '@coreui/react'
/**
 * @author
 * @function BuscarCargo
 **/
const BuscarCargo = (props) => {
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CForm>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre del Cargo" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre de la Empresa" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Codigo del Cargo" autoComplete="username" />
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Descripcion</CFormLabel> {/*eslint-disable-line */}
                <CInputGroup className="mb-3">
                  <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                </CInputGroup>
              </CInputGroup>
            </CCol>
            <div className="d-grid">
              <CButton color="success">Buscar Cargo</CButton>
            </div>
          </CRow>
        </CForm>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Codigo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Cargo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre de la Empresa</CTableHeaderCell>
              <CTableHeaderCell scope="col">Descripcion</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>MR-123</CTableDataCell>
              <CTableDataCell>Medico Regente</CTableDataCell>
              <CTableDataCell>Famartodo</CTableDataCell>
              <CTableDataCell>encargado de la administracion de toda la farmacia</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>R-111</CTableDataCell>
              <CTableDataCell>Regente</CTableDataCell>
              <CTableDataCell>Farmaexpress</CTableDataCell>
              <CTableDataCell>Encargado de toda la farmacia</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>A-333</CTableDataCell>
              <CTableDataCell>Asistente</CTableDataCell>
              <CTableDataCell>Locatel</CTableDataCell>
              <CTableDataCell>Encargado de la atencion al cliente</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarCargo
