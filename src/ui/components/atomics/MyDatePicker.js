import DatePicker from "react-datepicker";

export default function MyDatePicker({selected, onChange, ...props}){
  return(
    <div className="datepicker" name={props.name}>
      <label
      className="lead-text datepicker-label"
      htmlFor="datepicker">Date</label>
      <div className="datepicker-picker">
        <DatePicker
          id="datepicker"
          selected={selected}
          onChange={onChange}
          dateFormat='dd-MM-yyyy'
          />
      </div>
    </div>
  )
}