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
 * @function BuscarLotes
 **/
const BuscarLotes = (props) => {
  const [lotes, setlotes] = useState([])
  useEffect(() => {
    const getlotes = () => {
      fetch('http://localhost:9000/Lote')
        .then((res) => res.json())
        .then((res) => setlotes(res))
    }
    getlotes()
  }, [])
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CForm>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Codigo del Lote" autoComplete="username" />
              </CInputGroup>
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
            {lotes.map( (lote) => ( /* eslint-disable-line*/
              <CTableRow key={lote.id}>
                <CTableHeaderCell scope="row">{lote.id}</CTableHeaderCell>
                <CTableDataCell>{lote.rif}</CTableDataCell>
                <CTableDataCell>{lote.nombre}</CTableDataCell>
                <CTableDataCell>{lote.direccion}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarLotes
