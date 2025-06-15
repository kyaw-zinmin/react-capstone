import { useField } from "formik";

export default function Selector({
  label, options, ...props
}){
  const [field, meta] = useField(props);
  return(
    <div className="selector">
      <label htmlFor={props.id || props.name}>
        {label}
      </label>
      <select {...field} {...props}>
        <option value="">Table type</option>
        {options.map((option, index) => {
          return(
            <option 
            name={label}
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