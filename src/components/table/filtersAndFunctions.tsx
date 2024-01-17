/* eslint-disable @typescript-eslint/no-explicit-any */
import { downloadExcel } from 'react-export-table-to-excel';
import { useEffect, useState } from 'react';

export const handleDownloadExcel = (
  filename: string,
  header: string[],
  body: any[]
) => {
  downloadExcel({
    fileName: filename,
    sheet: filename,
    tablePayload: {
      header: header,
      body: body
    }
  });
};

export const GlobalFilter = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
