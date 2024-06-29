export function Button(props: any) {
  const {
    onClick,
    type,
    disabled = false,
    label,
    bgColor = 'bg-green-600',
    hoverColor = 'hover:bg-green-700',
  } = props

  return (
    <button
      type={type ? type : 'button'}
      disabled={disabled}
      onClick={onClick}
      className={`${bgColor} text-white ${hoverColor} focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-1`}
    >
      {label}
    </button>
  )
}
