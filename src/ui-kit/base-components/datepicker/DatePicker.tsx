import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { InputAdornment } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

interface CustomDatePickerProps {
  value: Date | null;
  onChange: (value: Date | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
}) => {
  const handleDateChange = (newValue: Dayjs | null) => {
    onChange(newValue ? newValue.toDate() : null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-col">
        <p className="uppercase font-bold">Date of Birth</p>
        <DatePicker
          value={value ? dayjs(value) : null}
          onChange={handleDateChange}
          slotProps={{
            textField: {
              fullWidth: true,
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EditIcon sx={{ color: "#D1D1D1", width: "20px" }} />
                  </InputAdornment>
                ),
              },
              sx: {
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  borderRadius: "0",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderBottom: "1px solid #E0E0E0",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderBottom: "1px solid #E0E0E0 !important",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  borderBottom: "1px solid #E0E0E0",
                },
              },
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
