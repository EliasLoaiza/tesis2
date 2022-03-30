import React, { useState } from 'react'
import sha256 from 'crypto-js/sha256'
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
import { cilLockLocked, cilUser } from '@coreui/icons'
/**
 * @author
 * @function IngresarLotes
 **/
const IngresarLotes = (props) => {
  const [lote, setlote] = useState({
    Id_usuario: 0, /* eslint-disable-line*/
    Id_empresa: 0, /* eslint-disable-line*/
    hash_actual_lote: '',
    cantidad_medicamentos_lote: 0, /* eslint-disable-line*/
    Id_medicamento: 0, /* eslint-disable-line*/
    fecha_creacion_lote: '', /* eslint-disable-line*/
  })
  const handleChange = (e) => {
    setlote({
      ...lote,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    lote.Id_usuario = parseInt(lote.Id_usuario, 10)
    lote.Id_empresa = parseInt(lote.Id_empresa, 10)
    lote.cantidad_medicamentos_lote = parseInt(lote.cantidad_medicamentos_lote, 10)
    lote.Id_medicamento = parseInt(lote.Id_medicamento, 10)
    if (lote.fecha_creacion_lote === '' || lote.cantidad_medicamentos_lote <= 0 || lote.Id_usuario <= 0 || lote.Id_empresa <= 0 || lote.Id_medicamento <= 0){ /* eslint-disable-line*/
      alert('Todos los campos son obligatorios')
      return
    }
    const createHash = () => {
      return sha256(lote.Id_medicamento_lote + lote.cantidad_medicamentos_lote + lote.fecha_creacion_lote).toString() /* eslint-disable-line*/
    }
    lote.hash_actual_lote = createHash()
    const requestInit = {
      method: 'POST',
      body: JSON.stringify(lote),
      headers: { 'Content-Type': 'application/json' },
    }
    fetch('http://localhost:9000/Lote', requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res))
    setlote({
      Id_usuario: 0, /* eslint-disable-line*/
      Id_empresa: 0, /* eslint-disable-line*/
      hash_actual_lote: '',
      cantidad_medicamentos_lote: 0, /* eslint-disable-line*/
      Id_medicamento: 0, /* eslint-disable-line*/
      fecha_creacion_lote: '', /* eslint-disable-line*/
    })
  }
  return (
    <div className="bg-light min-vh-50 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Codigo del Usuario</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="Id_usuario" name="Id_usuario" value={lote.Id_usuario} onChange={handleChange} type="number" placeholder="Codigo del Usuario" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Codigo de la empresa</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="Id_empresa" name="Id_empresa" value={lote.Id_empresa} onChange={handleChange} type="number" placeholder="Codigo de la empresa" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Codigo del Medicamento</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="Id_medicamento" name="Id_medicamento" value={lote.Id_medicamento} onChange={handleChange} type="number" placeholder="Codigo del medicamento" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Cantidad del Medicamento</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="cantidad_medicamentos_lote" name="cantidad_medicamentos_lote" value={lote.cantidad_medicamentos_lote} onChange={handleChange} type="number" placeholder="Cantidad de Medicamentos" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Creacion</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="fecha_creacion_lote" name="fecha_creacion_lote" value={lote.fecha_creacion_lote} onChange={handleChange} type="date" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">Ingresar Lote</CButton> {/* eslint-disable-line*/}
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
export default IngresarLotes
