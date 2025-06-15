import { useField } from "formik";

export default function Selector({
  label, options, ...props
}){
  const [field, meta] = useField(props);
  return(
    <div className="selector">
      <label 
      className="lead-text selector-label"
      htmlFor={props.id}>
        {label}
      </label>
      <select
      className="selector-picker" 
      name={props.name}
      id={props.id} 
      {...field} 
      {...props}>
        <option value="">--Table type--</option>
        {options.map((option, index) => {
          return(
            <option 
            key={index}
            value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}