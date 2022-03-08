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
 * @function BuscarMedicamentos
 **/
const BuscarMedicamentos = (props) => {
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CForm>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormSelect aria-label="Default select example">
                  <option>Selecciona el Tipo de Administracion</option>
                  <option value="Oral">Oral</option>
                  <option value="Sublingual">Sublingual</option>
                  <option value="Intravenosa">Intravenosa</option>
                  <option value="Intraarterial">Intraarterial</option>
                  <option value="Intramuscular">Intramuscular</option>
                  <option value="Subcutanea">Subcutanea</option>
                  <option value="Inhalada">Inhalada</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormSelect aria-label="Default select example">
                  <option>Selecciona el Uso</option>
                  <option value="Analgésicos y antiinflamatorios">Analgésicos y antiinflamatorios</option> {/*eslint-disable-line */}
                  <option value="Antiinfecciosos">Antiinfecciosos</option>
                  <option value="Mucolíticos y antitusivos">Mucolíticos y antitusivos</option>
                  <option value="Antiulcerosos y antiácidos">Antiulcerosos y antiácidos</option>
                  <option value="Antidiarreicos y laxantes">Antidiarreicos y laxantes</option>
                  <option value="Antipiréticos">Antipiréticos</option>
                  <option value="Antialérgicos">Antialérgicos</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Condciones de Almacenamiento</CFormLabel> {/*eslint-disable-line */}
                <CInputGroup className="mb-3">
                  <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                </CInputGroup>
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroup className="mb-3">
                  <CFormLabel htmlFor="">Fecha de Expedicion</CFormLabel>
                </CInputGroup>
                <CFormInput placeholder="Dia" />
                <CFormInput placeholder="Mes" />
                <CFormInput placeholder="Años" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroup className="mb-3">
                  <CFormLabel htmlFor="">Fecha de Vencimiento</CFormLabel>
                </CInputGroup>
                <CFormInput placeholder="Dia" />
                <CFormInput placeholder="Mes" />
                <CFormInput placeholder="Años" />
              </CInputGroup>
            </CCol>
            <div className="d-grid">
              <CButton color="success">Buscar Medicamentos</CButton>
            </div>
          </CRow>
        </CForm>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tipo de Administracion</CTableHeaderCell>
              <CTableHeaderCell scope="col">Uso</CTableHeaderCell>
              <CTableHeaderCell scope="col">Condciones de Almacenamiento</CTableHeaderCell>
              <CTableHeaderCell scope="col">Fecha de Expedicion</CTableHeaderCell>
              <CTableHeaderCell scope="col">Fecha de Vencimiento</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Arbistina</CTableDataCell>
              <CTableDataCell>Oral</CTableDataCell>
              <CTableDataCell>Analgésicos y antiinflamatorios</CTableDataCell>
              <CTableDataCell>Estanteria estandar</CTableDataCell>
              <CTableDataCell>28/02/2021</CTableDataCell>
              <CTableDataCell>15/05/2022</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Dayzol</CTableDataCell>
              <CTableDataCell>Intravenosa</CTableDataCell>
              <CTableDataCell>Antiulcerosos y antiácidos</CTableDataCell>
              <CTableDataCell>Nevera a 30 Grados Celcius</CTableDataCell>
              <CTableDataCell>12/04/2020</CTableDataCell>
              <CTableDataCell>15/05/2022</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>Terbicrym</CTableDataCell>
              <CTableDataCell>Intravenosa</CTableDataCell>
              <CTableDataCell>Antidiarreicos y laxantes</CTableDataCell>
              <CTableDataCell>Estanteria Estandar en Cuarto Oscuro</CTableDataCell>
              <CTableDataCell>20/07/2010</CTableDataCell>
              <CTableDataCell>23/12/2018</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarMedicamentos
