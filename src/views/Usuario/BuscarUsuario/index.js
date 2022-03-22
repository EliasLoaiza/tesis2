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
import { Component } from 'react'
/**
 * @author
 * @function BuscarUsuario
 **/
const BuscarUsuario = (props) => {
  const [usuarios, setusuarios] = useState([])
  useEffect(() => {
    const getusuarios = () => {
      fetch('http://localhost:9000/Usuario')
        .then((res) => res.json())
        .then((res) => setusuarios(res))
    }
    getusuarios()
  }, [])
  console.log(usuarios)
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CForm>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormInput name="Nombre" placeholder="Nombres" autoComplete="username" /> {/* eslint-disable-line*/}
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput name="Apellido" placeholder="Apellidos" autoComplete="username" /> {/* eslint-disable-line*/}
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput name="Cedula" placeholder="Cedula" /> {/* eslint-disable-line*/}
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput name="Telefono" placeholder="Telefono" /> {/* eslint-disable-line*/}
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormSelect name="Tipo de Usuario" aria-label="Default select example"> {/* eslint-disable-line*/}
                  <option>Selecciona el Tipo de Usuario</option>
                  <option value="Persona Natural">Persona Natural</option>
                  <option value="Trabajador">Trabajador</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput name="Correo" placeholder="Correo" autoComplete="email" /> {/* eslint-disable-line*/}
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Direccion</CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormTextarea name="Direccion" id="exampleFormControlTextarea1" rows="3"></CFormTextarea> {/* eslint-disable-line*/}
                </CInputGroup>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput name="Cargo" placeholder="Cargo" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroup className="mb-3">
                  <CFormLabel htmlFor="">Fecha de Nacimiento</CFormLabel>
                </CInputGroup>
                <CFormInput name="Dia" placeholder="Dia" />
                <CFormInput name="Mes" placeholder="Mes" />
                <CFormInput name="Años" placeholder="Años" />
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
              <CTableHeaderCell scope="col">Fecha de Nacimiento</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {usuarios.map( (usuario) => ( /* eslint-disable-line*/
              <CTableRow key={usuario.id}>
                <CTableHeaderCell scope="row">{usuario.id}</CTableHeaderCell>
                <CTableDataCell>{usuario.nombre}</CTableDataCell>
                <CTableDataCell>{usuario.apellido}</CTableDataCell>
                <CTableDataCell>{usuario.cedula}</CTableDataCell>
                <CTableDataCell>{usuario.correo}</CTableDataCell>
                <CTableDataCell>{usuario.telefono}</CTableDataCell>
                <CTableDataCell>{usuario.tipo}</CTableDataCell>
                <CTableDataCell>{usuario.direccion}</CTableDataCell>
                <CTableDataCell>{usuario.fecha_nacimiento}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  )
}
export default BuscarUsuario
