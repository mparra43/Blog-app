const baseInputClasses =
  'w-full px-4 py-2 text-gray-900 bg-white placeholder:text-gray-400 border border-gray-200 rounded-md focus:outline-none focus:border-secondary focus:ring focus:ring-secondary-100 focus:ring-opacity-40'
const disabledInputClasses = 'disabled:bg-gray-100 disabled:text-gray-400 '
const readOnlyInputClasses = 'read-only:text-gray-700'
// const errorInputClasses =
//   'invalid:!border-red-500 invalid:focus:!ring-red-100 invalid:placeholder:!text-red-300 invalid:!text-red-500'

export const inputClasses = `${baseInputClasses} ${disabledInputClasses} ${readOnlyInputClasses}`
