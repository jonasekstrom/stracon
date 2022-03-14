import React from 'react'
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux'
import { deleteListing } from '../../features/listings/listingSlice'

function ListingItem({ listing, index }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <tr key={index}>
    <th className="align-middle" scope="row">{new Date(listing.createdAt).toLocaleDateString('sv-SE')}</th>
    <td className='align-middle'>{listing.location}</td>
    <td className='align-middle'>{listing.title}</td>
    <td className='align-middle'>{listing.published === "true" ? <> Publicerad</> : <>Ej publicerad</>}</td>
    <td className='align-middle'>{listing.deadline !== undefined ? <>{new Date(listing.deadline).toLocaleDateString('sv-SE')}</>:<>Inget datum satt</>}</td>
    <td><button className="btn btn-primary m-2" data-toggle="tooltip" data-placement="top" title="Förhandsgranska" onClick={() => navigate(`/admin/dashboard/previewjoblisting/${listing._id}`)}><i className="fas fa-eye"></i></button>
  
      <button className="btn btn-warning m-2" data-toggle="tooltip" data-placement="top" title="Redigera" onClick={() => navigate(`/admin/dashboard/editjoblisting/${listing._id}`)}><i className="fas fa-edit"></i></button>
      
      
      <button data-toggle="tooltip" data-placement="top" title="Radera" onClick={() => dispatch(deleteListing(listing._id))} className='close btn btn-outline-danger m-2'>
      <i className="fas fa-trash-alt"></i>
      </button></td>
  </tr>
  )
}

export default ListingItem