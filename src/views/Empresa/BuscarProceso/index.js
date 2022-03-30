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
 * @function BuscarProceso
 **/
const BuscarProceso = (props) => {
  const [listUpdate, setlistUpdate] = useState(false)
  const [procesos, setprocesos] = useState([])
  useEffect(() => {
    const getprocesos = () => {
      fetch('http://localhost:9000/Proceso')
        .then((res) => res.json())
        .then((res) => setprocesos(res))
    }
    getprocesos()
  }, [listUpdate])
  const handleDelete = (id_proceso) => {
    const requestInit = {
      method: 'DELETE',
    }
    fetch('http://localhost:9000/Proceso/' + id_proceso, requestInit)
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
            {procesos.map( (proceso) => ( /* eslint-disable-line*/
              <CTableRow key={proceso.id}>
                <CTableHeaderCell scope="row">{proceso.id_proceso}</CTableHeaderCell>
                <CTableDataCell>{proceso.nombre_proceso}</CTableDataCell>
                <CTableDataCell>{proceso.nombre_cargo}</CTableDataCell>
                <CTableDataCell>{proceso.descripcion_proceso}</CTableDataCell>
                <CButton onClick={() => handleDelete(proceso.id_proceso)} color="red">X</CButton>{ /* eslint-disable-line*/}
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarProceso
