import React from "react";
import EditableInput from "../../EditableInput";
import CustomDatePicker from "@/ui-kit/base-components/datepicker/DatePicker";

interface EditableFormProps {
  formData: {
    name: string;
    lastName: string;
    middleName: string;
    dateOfBirth: Date | null;
    sex: string;
  };
  onChange: (field: string, value: string | Date | null) => void;
}

const EditableForm: React.FC<EditableFormProps> = ({ formData, onChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <EditableInput
        label="* Name"
        value={formData.name}
        onChange={(value) => onChange("name", value)}
      />
      <EditableInput
        label="* Last Name"
        value={formData.lastName}
        onChange={(value) => onChange("lastName", value)}
      />
      <EditableInput
        label="Middle Name"
        value={formData.middleName}
        onChange={(value) => onChange("middleName", value)}
      />
      <CustomDatePicker
        value={formData.dateOfBirth}
        onChange={(value) => onChange("dateOfBirth", value)}
      />
      <EditableInput
        label="Sex"
        value={formData.sex}
        onChange={(value) => onChange("sex", value)}
      />
    </div>
  );
};

export default EditableForm;
