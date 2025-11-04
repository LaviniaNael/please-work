import React, { useEffect, useState, type ComponentProps } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { getExampleNumber, parsePhoneNumberFromString } from 'libphonenumber-js';
import examples from 'libphonenumber-js/examples.mobile.json';
import { usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import '../../css/components/InternationalPhone.css';

interface PhoneInputProps extends Omit<ComponentProps<typeof PhoneInput>, 'value' | 'onChange'> {
    label?: string;
    required?: boolean;
    onValidChange?: (value: string | undefined, isValid: boolean) => void;
    value?: string | ComponentProps<typeof PhoneInput>['value'];
    onChange?: (value: string | ComponentProps<typeof PhoneInput>['value']) => void;
}

const CustomPhoneInput: React.FC<PhoneInputProps> = ({
    label = 'Phone Number',
    required = false,
    defaultCountry = 'EG',
    onChange,
    onValidChange,
    ...props
}) => {
    const { locale } = usePage().props;
    const [value, setValue] = useState<string | ComponentProps<typeof PhoneInput>['value']>(props.value);
    const [error, setError] = useState<string | null>(null);
    const [touched, setTouched] = useState(false);
    const [country, setCountry] = useState<string | undefined>(defaultCountry);

    const getPlaceholder = (country?: string) => {
        if (!country) return '+123456789';
        try {
            const example = getExampleNumber(country as any, examples);
            return example ? example.formatInternational() : '+123456789';
        } catch {
            return '+123456789';
        }
    };

    const validate = (val?: string | ComponentProps<typeof PhoneInput>['value']) => {
        const str = (val as string | undefined) ?? (value as string | undefined);
        if (required && !str) {
            return { valid: false, error: 'Phone number is required' };
        }
        if (!str) return { valid: false, error: null };

        try {
            const pn = parsePhoneNumberFromString(str);
            if (!pn) {
                return { valid: false, error: 'Invalid phone number format' };
            }
            // Note: Do not hard-fail on country mismatch; rely on number validity instead.
            if (!pn.isPossible()) {
                return { valid: false, error: 'Number length is not possible for this country' };
            }
            if (!pn.isValid()) {
                return { valid: false, error: 'Number is not valid for this country' };
            }
            return { valid: true, error: null };
        } catch {
            return { valid: false, error: 'Invalid phone number' };
        }
    };

    const handleChange = (newValue: string | ComponentProps<typeof PhoneInput>['value']) => {
        setValue(newValue);
        const strVal = newValue as string | undefined;
        onChange?.(strVal);

        const { valid, error } = validate(newValue);
        setError(error);
        if (onValidChange) onValidChange(strVal, !!valid);
    };

    const handleBlur = () => {
        setTouched(true);
        const { error } = validate();
        setError(error);
    };

    // Keep parent informed about validity on mount and when value/country change
    useEffect(() => {
        const strVal = value as string | undefined;
        const { valid } = validate();
        if (onValidChange) onValidChange(strVal, !!valid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, country, required]);

    // Sync internal state when parent-controlled value changes (e.g., after submit reset)
    useEffect(() => {
        setValue(props.value);
         
    }, [props.value]);

    const inputClasses = `
    w-full p-3 bg-gray-800 bg-opacity-50 border border-gray-700 
    rounded-md text-white placeholder-gray-400 
    focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
    transition-all duration-200
    ${error && touched ? 'border-red-500 focus:ring-red-500' : ''}
  `;

    const selectClasses = `
    bg-gray-800 bg-opacity-50 border border-gray-700 text-white 
    focus:outline-none focus:ring-1 focus:ring-cyan-500
    ${error && touched ? 'border-red-500' : ''}
  `;

    return (
        <div className="form-group mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                {label} {required}
            </label>
            <div className={`relative ${locale === 'ar' ? 'rtl' : 'ltr'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                <PhoneInput
                    international
                    defaultCountry={defaultCountry}
                    placeholder={getPlaceholder(country)}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={error}
                    className={cn(
                        'w-full rounded-lg border border-gray-700 bg-white/5 px-4 py-2.5 text-white outline-none transition-all focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30',
                        locale === 'ar' ? 'text-right' : 'text-left',
                        props.className
                    )}
                    style={locale === 'ar' ? { direction: 'rtl' } : { direction: 'ltr' }}
                    {...props}
                />
            </div>
            {touched && (
                error ? (
                    <p className="mt-1 text-sm text-red-500" role="alert" aria-live="polite">{error}</p>
                ) : (
                    value ? <p className="mt-1 text-sm text-emerald-400" aria-live="polite">Valid phone number</p> : null
                )
            )}
        </div>
    );
};

export default CustomPhoneInput;
