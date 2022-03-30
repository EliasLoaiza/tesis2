import React, { useState, useEffect } from 'react'
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
  const [listUpdate, setlistUpdate] = useState(false)
  const [medicamentos, setmedicamentos] = useState([])
  useEffect(() => {
    const getmedicamentos = () => {
      fetch('http://localhost:9000/Medicamento')
        .then((res) => res.json())
        .then((res) => setmedicamentos(res))
    }
    getmedicamentos()
  }, [listUpdate])
  const handleDelete = (id_medicamento) => {
    const requestInit = {
      method: 'DELETE',
    }
    fetch('http://localhost:9000/Medicamento/' + id_medicamento, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res))
    setlistUpdate(true)
  }
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
                <CFormInput id="fecha_expedicion" name="fecha_expedicion" type="date" /> {/* eslint-disable-line*/}
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroup className="mb-3">
                  <CFormLabel htmlFor="">Fecha de Vencimiento</CFormLabel>
                </CInputGroup>
                <CFormInput id="fecha_vencimiento" name="fecha_vencimiento" type="date" /> {/* eslint-disable-line*/}
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
            {medicamentos.map( (medicamento) => ( /* eslint-disable-line*/
              <CTableRow key={medicamento.id_medicamento}>
                <CTableHeaderCell scope="row">{medicamento.id_medicamento}</CTableHeaderCell>
                <CTableDataCell>{medicamento.nombre_medicamento}</CTableDataCell>
                <CTableDataCell>{medicamento.tipo_administracion_medicamento}</CTableDataCell>
                <CTableDataCell>{medicamento.uso_medicamento}</CTableDataCell>
                <CTableDataCell>{medicamento.condiciones_almacenamiento}</CTableDataCell>
                <CTableDataCell>{medicamento.fecha_expedicion_medicamento}</CTableDataCell>
                <CTableDataCell>{medicamento.fecha_vencimiento_medicamento}</CTableDataCell>
                <CButton onClick={() => handleDelete(medicamento.id_medicamento)} color="red">X</CButton>{ /* eslint-disable-line*/}
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarMedicamentos
