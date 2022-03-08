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
 * @function BuscarLotes
 **/
const BuscarLotes = (props) => {
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CForm>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Hash del Lote" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre de Usuario" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre de Medicamento" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Cantidad de Medicamentos" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre de Empresa" autoComplete="username" />
              </CInputGroup>
            </CCol>
            <CCol>
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
            </CCol>
            <div className="d-grid">
              <CButton color="success">Buscar Lote</CButton>
            </div>
          </CRow>
        </CForm>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Hash</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre de Usuario</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre de Medicamento</CTableHeaderCell>
              <CTableHeaderCell scope="col">Cantidad de Medicamentos</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre de Empresa</CTableHeaderCell>
              <CTableHeaderCell scope="col">Fecha de Creacion</CTableHeaderCell>
              <CTableHeaderCell scope="col">Fecha de Salida</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>75c450c3f963befb912ee79f0b63e563652780f0</CTableDataCell>
              <CTableDataCell>Jacob</CTableDataCell>
              <CTableDataCell>Arbistina</CTableDataCell>
              <CTableDataCell>100.000</CTableDataCell>
              <CTableDataCell>Farmatodo</CTableDataCell>
              <CTableDataCell>31/01/2022</CTableDataCell>
              <CTableDataCell>04/02/2022</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>8b9248a4e0b64bbccf82e7723a3734279bf9bbc4</CTableDataCell>
              <CTableDataCell>Jacob</CTableDataCell>
              <CTableDataCell>Dayzol</CTableDataCell>
              <CTableDataCell>50.000</CTableDataCell>
              <CTableDataCell>Farmaexpress</CTableDataCell>
              <CTableDataCell>23/12/2021</CTableDataCell>
              <CTableDataCell>04/01/2022</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>8b9248a4e0b64bbccf82e7723a3734279bf9bbc4</CTableDataCell>
              <CTableDataCell>Samuel</CTableDataCell>
              <CTableDataCell>Acetaminofen</CTableDataCell>
              <CTableDataCell>10</CTableDataCell>
              <CTableDataCell>Saas</CTableDataCell>
              <CTableDataCell>16/08/2015</CTableDataCell>
              <CTableDataCell>17/11/2016</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarLotes
