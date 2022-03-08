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
 * @function BuscarProceso
 **/
const BuscarProceso = (props) => {
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CForm>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre del Proceso" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Codigo de Cargo" autoComplete="username" />
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
              <CButton color="success">Buscar Proceso</CButton>
            </div>
          </CRow>
        </CForm>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
              <CTableHeaderCell scope="col">Cargo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Descripcion</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Verificacion de Seriales</CTableDataCell>
              <CTableDataCell>A-113</CTableDataCell>
              <CTableDataCell>Proceso para Revisar Seriales de Cada Medicamento y Lotes</CTableDataCell>{/*eslint-disable-line */}
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Carga de Productos</CTableDataCell>
              <CTableDataCell>C-123</CTableDataCell>
              <CTableDataCell>Proceso de Carga de Productos en Camiones para Distribucion</CTableDataCell>{/*eslint-disable-line */}
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>Control de Calidad de Compuesto</CTableDataCell>
              <CTableDataCell>A-113</CTableDataCell>
              <CTableDataCell>Proceso de Certificacion y Prueba de Compuestos de los Medicamentos</CTableDataCell>{/*eslint-disable-line */}
            </CTableRow>
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarProceso
