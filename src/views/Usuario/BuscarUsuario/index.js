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
 * @function BuscarUsuario
 **/
const BuscarUsuario = (props) => {
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CForm>
          <CRow>
            <CCol>
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
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Direccion</CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                </CInputGroup>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Cargo" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroup className="mb-3">
                  <CFormLabel htmlFor="">Fecha de Nacimiento</CFormLabel>
                </CInputGroup>
                <CFormInput placeholder="Dia" />
                <CFormInput placeholder="Mes" />
                <CFormInput placeholder="Años" />
              </CInputGroup>
            </CCol>
            <div className="d-grid">
              <CButton color="success">Buscar Usuario</CButton>
            </div>
          </CRow>
        </CForm>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
              <CTableHeaderCell scope="col">Apellido</CTableHeaderCell>
              <CTableHeaderCell scope="col">Cedula</CTableHeaderCell>
              <CTableHeaderCell scope="col">Correo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Telefono</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tipo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Direccion</CTableHeaderCell>
              <CTableHeaderCell scope="col">Cargo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Fecha de Nacimiento</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>1234567</CTableDataCell>
              <CTableDataCell>markotto@gmail.com</CTableDataCell>
              <CTableDataCell>0424-1234567</CTableDataCell>
              <CTableDataCell>Persona Natural</CTableDataCell>
              <CTableDataCell>Av. La Guajira</CTableDataCell>
              <CTableDataCell></CTableDataCell>
              <CTableDataCell>01/01/2000</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Jacob</CTableDataCell>
              <CTableDataCell>Thornton</CTableDataCell>
              <CTableDataCell>12857867</CTableDataCell>
              <CTableDataCell>jacobthornton@gmail.com</CTableDataCell>
              <CTableDataCell>0424-9874567</CTableDataCell>
              <CTableDataCell>Trabajador</CTableDataCell>
              <CTableDataCell>Av. Las Delicias</CTableDataCell>
              <CTableDataCell>Gerente</CTableDataCell>
              <CTableDataCell>10/01/1999</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>Larry</CTableDataCell>
              <CTableDataCell>Bird</CTableDataCell>
              <CTableDataCell>78671285</CTableDataCell>
              <CTableDataCell>LarryBird@hotmail.com</CTableDataCell>
              <CTableDataCell>0412-5679874</CTableDataCell>
              <CTableDataCell>Trabajador</CTableDataCell>
              <CTableDataCell>Urb. La Picola</CTableDataCell>
              <CTableDataCell>Asistente de Ventas</CTableDataCell>
              <CTableDataCell>28/5/2005</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarUsuario
