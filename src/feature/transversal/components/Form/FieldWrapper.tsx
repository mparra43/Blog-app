import clsx from 'clsx'

const  variants = {
  left: '',
  bottom: '',
}

export interface FieldWrapperProps {
  children: React.ReactNode
  className?: string
  label?: React.ReactNode
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
  labelPosition?: 'top' | 'right' | 'left'
  errorId?: string
  error?: string
  descriptionId?: string
  description?: string
  variant?: keyof typeof variants
}

export type FieldWrapperPassThroughProps = Pick<
  FieldWrapperProps,
  'description' | 'error' | 'label' | 'labelPosition' | 'labelProps' |'className' 
>

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  children,
  label,
  labelPosition = 'top',
  labelProps = {},
  descriptionId,
  description,
  errorId,
  error,
  className
}) => {

  const { className: labelClassName } = labelProps

  return (
    <div className={className}>
      {label ? (
        <label
          {...labelProps}
          className={clsx(
            labelClassName,
            labelPosition === 'left' ? 'flex items-center gap-2' : '',
            labelPosition === 'right' ? 'flex flex-row-reverse items-center gap-2' : ''
          )}
        >
          <span className={labelPosition === 'top' ? 'mb-2' : ''}>{label}</span>
          <div className='relative'>{children}</div>
        </label>
      ) : null}

      {!label ? children : null}

      {description ? (
        <span
          className={`block mt-1 text-sm text-gray-500 ${labelPosition === 'left' ? 'text-right' : ''
            }`}
          id={descriptionId}
        >
          {description}
        </span>
      ) : null}

      {error ? (
        <span
          aria-live='assertive'
          className={`block text-sm text-red-500 ${labelPosition === 'left' ? 'text-right' : ''}`}
          id={errorId}
          role='alert'
        >
          {error}
        </span>
      ) : null}
    </div>
  )
}