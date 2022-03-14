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
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { CImage } from '@coreui/react'
import NegativoImage from 'src/assets/images/letra-x.png'
import PositivoImage from 'src/assets/images/aprobar.png'
/**
 * @author
 * @function EstadoLotes
 **/
const EstadoLotes = (props) => {
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Codigo del Lote" autoComplete="username" />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">Ingresar Empresa</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
              <CTableHeaderCell scope="col">Empresa</CTableHeaderCell>
              <CTableHeaderCell scope="col">Estado</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Verificacion de Seriales</CTableDataCell>
              <CTableDataCell>Drogueria</CTableDataCell>
              <CImage flex src={NegativoImage} width={40} height={40}></CImage>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Carga de Productos</CTableDataCell>
              <CTableDataCell>Drogueria</CTableDataCell>
              <CImage flex src={PositivoImage} width={40} height={40}></CImage>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>Control de Calidad de Compuesto</CTableDataCell>
              <CTableDataCell>Farmatodo</CTableDataCell>
              <CImage flex src={PositivoImage} width={40} height={40}></CImage>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default EstadoLotes
