import DatePicker from "react-datepicker";
import Selector from "../components/atomics/Selector";
import { tabletypes } from "../../data/data";
import { useState } from "react";
import {Formik, Form} from 'formik';
import * as y from 'yup'

const MyDatePicker = ({selected, onChange}) => {
  return(
    <div className="datepicker">
      <label htmlFor="datepicker">Date</label>
      <DatePicker 
      selected={selected}
      onChange={onChange}/>
    </div>
  )
}

export default function Reservations(){
  const [bookingDate, setBookingDate] = useState({
    date: '', 
    tableType: {
      label: '',
      value: 0
    }, 
    guestNumber: 0
  })
  const [selectedDate, setSelectedDate] = useState(new Date())
  return(
    <main className="main booking">
      <Formik
        initialValues={{
          date: '',
          tableType: {},
          guestNumber: 0
        }}

        validationSchema={y.object({
          date: y.string()
            .datetime()
            .required(),
          tableType: y.object({
            label: y.string().required(),
            value: y.number().required()
          }),
          guestNumber: y.number()
            .required()
        })}

        onSubmit={(values, setSubmitting) => {
          setBookingDate(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <header>
            <h3>Booking</h3>
          </header>
          <MyDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)} />
          <Selector
            label={'Table Types'}
            options={tabletypes} 
            onChange={handleChange}/>
          <div className="guestnumber">
            <label htmlFor="guestnumber-label">Guests</label>
            <input className="guestnumber-input" name="guestnumber" type="number" />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </main>
  )
}