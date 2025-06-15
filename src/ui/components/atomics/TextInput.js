import { useField } from "formik";

export default function TextInput({label, ...props}){
  const [field, meta] = useField(props);
  return(
    <div className={`textinput textinput-${props.name}`}>
      <label 
      className="hl textinput-label"
      htmlFor={props.id || props.name}>{label}</label>
      <input 
      className="textinput-input" 
      {...field} 
      {...props}
      placeholder={props.placeholder ? props.placeholder : label} />
      {meta.touched && meta.error
      ? <div className="error">{meta.error}</div>
      : null}
    </div>
  )
}