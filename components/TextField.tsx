import { ChangeEventHandler } from "react"


interface TextFieldProps {
    label: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

const TextField = ({ label, value, onChange }: TextFieldProps) => {
    return (
        <div className='relative w-full'>
            <input
                type='text'
                value={value}
                onChange={onChange}
                className='rounded-2xl py-3 px-4 w-full border border-gray-300 focus:border-[#fe0000] focus:ring-0 focus:outline-none peer'
                required
            />
            <label className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-200 ease-in
              ${value ? '-top-2 text-xs text-white' : 'text-gray-500'} 
              peer-focus:-top-1 peer-focus:text-xs peer-focus:text-white whitespace-nowrap`}>
                {label}
            </label>

        </div>
    )
}

export default TextField