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
 * @function IngresarMedicamentos
 **/
const IngresarMedicamentos = (props) => {
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Nombre del Medicamento" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Cantidad de Medicamentos" autoComplete="username" />
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
                  <div className="d-grid">
                    <CButton color="success">Ingresar Medicamentos</CButton>
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
export default IngresarMedicamentos
