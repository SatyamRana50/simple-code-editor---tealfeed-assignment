import React, { ChangeEvent, FocusEvent } from "react";

interface Props {
  label?: string;
  required?: boolean;
  id?: string;
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  error?: any;
  autoComplete?: string;
  errorText?: string;
  testId?: string;
  className?: string;
  wrapperClassName?: string;
  placeholder?: string;
  labelKey: string;
  valueKey: string;
  autofocus?: boolean;
  isMultiselect?: boolean;
  register?: any;
  rules?: any;
  data: any[];
}

const DropdownField = ({
  label,
  className,
  wrapperClassName,
  name,
  required,
  data,
  id,
  value,
  onChange,
  onBlur,
  disabled,
  error,
  autoComplete = "off",
  errorText,
  testId,
  autofocus,
  register,
  rules,
  placeholder,
  labelKey,
  valueKey,
  isMultiselect,
}: Props) => {
  return (
    <div className={`input-wrapper ${wrapperClassName}`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="required-field">*</span>}
        </label>
      )}
      <select
        name={name}
        id={id || name}
        multiple={isMultiselect}
        className={`custom-input form-input ${className} ${
          required && error[name] ? "border-error-90" : "border-neutral-30"
        }`}
        placeholder=" "
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        autoComplete={autoComplete}
        data-testid={testId}
        autoFocus={autofocus}
        value={value} // Set the value here
        {...register}
      >
        {!isMultiselect && (
          <option className={""} value={""}>
            {placeholder}
          </option>
        )}

        {data &&
          data.length > 0 &&
          data.map((item: any, key: any) => (
            <option key={key} value={item[valueKey]}>
              {item[labelKey]}
            </option>
          ))}
      </select>
      {label && (
        <label
          htmlFor={id}
          className="text-xs text-neutral-50 absolute pt-2 top-0 pointer-events-none -z-10"
        >
          {label}
          {required && <span className="text-error-90">*</span>}
        </label>
      )}
      {required && error[name] && <p className="error-cls">{errorText}</p>}
    </div>
  );
};

export default DropdownField;
