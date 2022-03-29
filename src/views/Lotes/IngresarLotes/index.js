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
    hash_actual: '',
    cantidad_medicamentos: 0, /* eslint-disable-line*/
    id_medicamento: 0, /* eslint-disable-line*/
    fecha_creacion: '', /* eslint-disable-line*/
  })
  const handleChange = (e) => {
    setlote({
      ...lote,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    lote.cantidad_medicamentos = parseInt(lote.cantidad_medicamentos, 10)
    lote.id_medicamento = parseInt(lote.id_medicamento, 10)
    if (lote.cantidad_medicamentos <= 0 || lote.id_medicamento <= 0 || lote.fecha_creacion === ''){ /* eslint-disable-line*/
      alert('Todos los campos son obligatorios')
      return
    }
    const createHash = () => {
      return sha256(lote.id_medicamento + lote.cantidad_medicamentos + lote.fecha_creacion).toString() /* eslint-disable-line*/
    }
    lote.hash_actual = createHash()
    const requestInit = {
      method: 'POST',
      body: JSON.stringify(lote),
      headers: { 'Content-Type': 'application/json' },
    }
    fetch('http://localhost:9000/Lote', requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res))
    setlote({
      cantidad_medicamentos: 0, /* eslint-disable-line*/
      id_medicamento: 0, /* eslint-disable-line*/
      fecha_creacion: '', /* eslint-disable-line*/
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
                      <CFormLabel htmlFor="">Codigo del Medicamento</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="id_medicamento" name="id_medicamento" value={lote.id_medicamento} onChange={handleChange} type="number" placeholder="Codigo del Medicamento" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Cantidad del Medicamento</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="cantidad_medicamentos" name="cantidad_medicamentos" value={lote.cantidad_medicamentos} onChange={handleChange} type="number" placeholder="Cantidad de Medicamentos" /> {/* eslint-disable-line*/}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormLabel htmlFor="">Fecha de Creacion</CFormLabel>
                    </CInputGroup>
                    <CFormInput id="fecha_creacion" name="fecha_creacion" value={lote.fecha_creacion} onChange={handleChange} type="date" /> {/* eslint-disable-line*/}
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
