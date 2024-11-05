import clsx from 'clsx'
import { type ForwardedRef, forwardRef, useId } from 'react'
import { inputClasses } from './classes'
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

export interface Option {
  label: string
  value: string | number | string[]
}

export interface SelectFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    FieldWrapperPassThroughProps {
  wrapperClassName?: string
  options: Option[]
}

export const SelectField = forwardRef(
  (
    {
      description,
      error,
      label,
      labelPosition,
      labelProps,
      className,
      wrapperClassName,
      options,
      ...restOfProps
    }: SelectFieldProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    const innerId = useId()
    const id = restOfProps.id ?? innerId
    const descriptionId = `${id}-description`
    const errorId = `${id}-error`

    return (
      <FieldWrapper
        className={wrapperClassName}
        description={description}
        descriptionId={descriptionId}
        error={error}
        errorId={errorId}
        label={label}
        labelPosition={labelPosition}
        labelProps={labelProps}
      >
        <select
          aria-describedby={`${descriptionId} ${errorId}`}
          className={clsx(inputClasses, className)}
          ref={ref}
          {...restOfProps}
        >
          {options.map(({ label, value }) => (
            <option key={`${label?.toString()}-${value}`} value={value}>
              {label}
            </option>
          ))}
        </select>
      </FieldWrapper>
    )
  }
)

SelectField.displayName = 'SelectField'
