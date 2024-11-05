import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import clsx from 'clsx'
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'



type CheckboxFieldProps = FieldWrapperPassThroughProps &
  InputHTMLAttributes<HTMLInputElement> & {
    className?: string
    registration?: Partial<UseFormRegisterReturn>
    

  }

export const CheckboxField = (props: CheckboxFieldProps) => {
  const { label,labelProps,className, registration, error, ...rest } = props
  return (
    <FieldWrapper label={label} labelProps={labelProps} error={error} variant='left'>
      <input
        type='checkbox'
        className={clsx(
          'rounded-md text-primary focus:outline-none focus:ring-teal-500 focus:ring focus:ring-opacity-40',
          className
        )}
        {...rest}
        {...registration}
      />
    </FieldWrapper>
  )
}
