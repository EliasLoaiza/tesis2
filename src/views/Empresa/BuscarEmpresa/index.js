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
 * @function BuscarEmpresa
 **/
const BuscarEmpresa = (props) => {
  const [listUpdate, setlistUpdate] = useState(false)
  const [empresas, setempresas] = useState([])
  useEffect(() => {
    const getempresas = () => {
      fetch('http://localhost:9000/Empresa')
        .then((res) => res.json())
        .then((res) => setempresas(res))
    }
    getempresas()
  }, [listUpdate])
  const handleDelete = (id) => {
    const requestInit = {
      method: 'DELETE',
    }
    fetch('http://localhost:9000/Empresa/' + id, requestInit)
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
                <CFormInput placeholder="Nombre de la Empresa" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="RIF" autoComplete="username" />
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Direccion</CFormLabel> {/*eslint-disable-line */}
                <CInputGroup className="mb-3">
                  <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                </CInputGroup>
              </CInputGroup>
            </CCol>
            <div className="d-grid">
              <CButton color="success">Buscar Empresa</CButton>
            </div>
          </CRow>
        </CForm>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">RIF</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
              <CTableHeaderCell scope="col">Direccion</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {empresas.map( (empresa) => ( /* eslint-disable-line*/
              <CTableRow key={empresa.id}>
                <CTableHeaderCell scope="row">{empresa.id}</CTableHeaderCell>
                <CTableDataCell>{empresa.rif}</CTableDataCell>
                <CTableDataCell>{empresa.nombre}</CTableDataCell>
                <CTableDataCell>{empresa.direccion}</CTableDataCell>
                <CButton onClick={() => handleDelete(empresa.id)} color="red">X</CButton>{ /* eslint-disable-line*/}
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarEmpresa
