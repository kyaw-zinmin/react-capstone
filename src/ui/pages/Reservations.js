import Selector from "../components/atomics/Selector";
import MyDatePicker from '../components/atomics/MyDatePicker';
import { tabletypes } from "../../data/data";
import { useEffect, useState } from "react";
import {Formik, Field, Form} from 'formik';
import * as y from 'yup';

export default function Reservations(){
  const [booking, setBooking] = useState(null)
  const [displayDate, setDisplayDate] = useState(null)
  const [success, setSuccess] = useState(false);
  const [selectorValue, setSelectorValue] = useState('')

  useEffect(() => {
    if(booking !== null){
      const date = booking.date;
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      setDisplayDate(`${day}-${month}-${year}`);
    }
  }, [booking])
  return(
    <main className="main booking">
      {!success && (

        <Formik
          initialValues={{
            date: new Date(),
            tableType: {
              label: '',
              value: 0,
            },
            guestNumber: 1
          }}

          validationSchema={y.object({
            date: y.date()
              .required()
              .nullable(),
            tableType: y.object({
              label: y.string().required(),
              value: y.number().required()
            }),
            guestNumber: y.number()
              .min(1)
              .max(8)
              .required()
          })}

          onSubmit={(values, {setSubmitting, resetForm}) => {
            setBooking(values);
            // resetForm();
            setSubmitting(false);
            setSuccess(true);
          }}
        >
          {({setFieldValue, values, errors, touched}) => (
            <Form className="bookingform">
              <header className="bookingtitle">
                <h3 className="title bookingtitle-h3">Booking</h3>
              </header>
              <MyDatePicker
                name="date"
                selected={values.date}
                onChange={(newDate) => {
                  setFieldValue('date', newDate);
                }}/>
                {touched.date && errors.date &&
                (<div className="error">{errors.date}</div>)}
              <Selector
                label='Table Types'
                name="tableType"
                id="tableTypes"
                value={selectorValue}
                options={tabletypes} 
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  const selectedType = tabletypes.find(
                    (type) => type.value === value
                  )

                  console.log("Table type", selectedType);
                  setFieldValue('tableType', selectedType);
                  setSelectorValue(value);
                }}/>
                {!selectorValue ? <div className="error-table">Table type is needed</div> : null}
              <div className="guestnumber">
                <label 
                  className="lead-text guestnumber-label" htmlFor="guestnumber">Guests</label>
                <Field 
                  className="guestnumber-input" 
                  name="guestNumber" 
                  type="number" 
                  // value={values.guestNumber}
                  onChange={(e) => {
                    const num = parseInt(e.target.value)
                    console.log('guest number', num)
                    setFieldValue('guestNumber', num)
                  }}
                  />
                  {touched.guestNumber && errors.guestNumber && (
                    <div className="error">{errors.guestNumber}</div>
                  )}
              </div>
              <button className="section-title bookingbtn" type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      )}
      {success && booking && displayDate && (
        <div className="confirmation">
          <h4 className="title confirm-title">Booking Confirmed!</h4>
          <p>Date: {displayDate}</p>
          <p>Table Type: {booking.tableType.label}</p>
          <p>Guests: {booking.guestNumber}</p>
          <button
            onClick={() => {
              setBooking(null);
              setSuccess(false);
              setSelectorValue('');
            }}
            className="section-title bookingbtn"
          >
            Make Another Booking
          </button>
        </div>
      )}
    </main>
  )
}