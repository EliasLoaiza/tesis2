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
  const [listUpdate, setlistUpdate] = useState(false)
  const [lotes, setlotes] = useState([])
  useEffect(() => {
    const getlotes = () => {
      fetch('http://localhost:9000/Lote')
        .then((res) => res.json())
        .then((res) => setlotes(res))
    }
    getlotes()
  }, [listUpdate])
  const handleDelete = (id) => {
    const requestInit = {
      method: 'DELETE',
    }
    fetch('http://localhost:9000/Lote/' + id, requestInit)
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
                <CFormInput placeholder="Codigo del Lote" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Hash del Lote" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre de Usuario" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre de Medicamento" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Cantidad de Medicamentos" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Nombre de Empresa" />
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroup className="mb-3">
                  <CFormLabel htmlFor="">Fecha de Creacion</CFormLabel>
                </CInputGroup>
                <CFormInput id="fecha_creacion" name="fecha_creacion" type="date" /> {/* eslint-disable-line*/}
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroup className="mb-3">
                  <CFormLabel htmlFor="">Fecha de Salida</CFormLabel>
                </CInputGroup>
                <CFormInput id="fecha_salida" name="fecha_salida" type="date" /> {/* eslint-disable-line*/}
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
              <CTableRow key={lote.id_lote}>
                <CTableHeaderCell scope="row">{lote.id_lote}</CTableHeaderCell>
                <CTableDataCell>{lote.hash_actual_lote}</CTableDataCell>
                <CTableDataCell>{lote.nombre_usuario}</CTableDataCell>
                <CTableDataCell>{lote.nombre_medicamento}</CTableDataCell>
                <CTableDataCell>{lote.cantidad_medicamentos_lote}</CTableDataCell>
                <CTableDataCell>{lote.nombre_empresa}</CTableDataCell>
                <CTableDataCell>{lote.fecha_creacion_lote}</CTableDataCell>
                <CTableDataCell>{lote.fecha_salida_lote}</CTableDataCell>
                <CButton onClick={() => handleDelete(lote.id_lote)} color="red">X</CButton>{ /* eslint-disable-line*/}
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarLotes
