type Props = {
    type?: string
    title: string
    state: string
    placeholder: string
    isTextArea?: boolean
    setState: (value: string) => void
}

const FormField = ({type, title, state, placeholder, isTextArea, setState}: Props) => {
  return (
    <div className="flex items-center justify-start flex-col w-full gap-4">
      <label className="w-full text-gray-600">
        {title}
      </label>

      {isTextArea ? (
        <textarea placeholder={placeholder} value={state} required 
        className="w-full outline-0 bg-gray-200 rounded-xl p-4"
        onChange={(e) => setState(e.target.value)}/>
      ) : (
        <input placeholder={placeholder} value={state} required 
        className="w-full outline-0 bg-gray-200 rounded-xl p-4"
        onChange={(e) => setState(e.target.value)} type={type || 'text'}/>
      )}
    </div>
  )
}

export default FormField