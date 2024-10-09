
export type InputFieldProps = {
    id: string;
    label: string;
    name: string;
    type: string;
    placeholder: string;
}

export default function InputField({id, label, name, type, placeholder}:InputFieldProps){
    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm font-semibold text-gray-500" htmlFor={id}>{label}</label>
            <input id={id} type={type} name={name} placeholder={placeholder}
                className="rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:outline-none 
                focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
        </div>
    );
}