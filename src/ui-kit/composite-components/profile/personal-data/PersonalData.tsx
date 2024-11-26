import React, { useState, useEffect } from "react";
import { useProfile } from "@/hooks/auth/useProfile";
import { useUpdateUser } from "@/hooks/user/useUpdateUser";
import EditableForm from "./form/PersonalDataForm";
import ActionButtons from "./buttons/ActionButtons";

const PersonalData = () => {
  const { data: profileData } = useProfile();

  const { mutate: updateUser, isPending, isError, isSuccess } = useUpdateUser();

  const initialFormData = {
    name: profileData?.name || "",
    lastName: profileData?.lastName || "",
    middleName: profileData?.middleName || "",
    dateOfBirth: profileData?.dateOfBirth
      ? new Date(profileData.dateOfBirth)
      : null,
    sex: profileData?.sex || "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setFormData(initialFormData);
  }, [profileData]);

  const checkIfChanged = () => {
    const isDataChanged =
      JSON.stringify(formData) !== JSON.stringify(initialFormData);
    setIsChanged(isDataChanged);
  };

  const handleChange = (field: string, value: string | Date | null) => {
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [field]: value,
      };
      setTimeout(() => checkIfChanged(), 0);
      return updatedData;
    });
  };

  const handleSave = () => {
    const updateData = { ...formData };

    if (updateData.dateOfBirth) {
      updateData.dateOfBirth = updateData.dateOfBirth.toISOString();
    }

    updateUser(
      {
        id: profileData?.id || 0,
        data: updateData,
      },
      {
        onSuccess: () => {
          console.log("User updated successfully!");
          setIsChanged(false);
        },
        onError: (error) => {
          console.error("Error updating user:", error);
        },
      }
    );
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setIsChanged(false);
  };

  return (
    <div>
      <EditableForm formData={formData} onChange={handleChange} />
      <ActionButtons
        isChanged={isChanged}
        isPending={isPending}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      {isError && <p className="text-red-500 mt-4">Failed to update user.</p>}
      {isSuccess && (
        <p className="text-green-500 mt-4">User updated successfully!</p>
      )}
    </div>
  );
};

export default PersonalData;
