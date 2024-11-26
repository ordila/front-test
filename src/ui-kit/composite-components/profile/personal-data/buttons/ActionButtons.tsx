import React from "react";

interface ActionButtonsProps {
  isChanged: boolean;
  isPending: boolean;
  onSave: () => void;
  onCancel: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  isChanged,
  isPending,
  onSave,
  onCancel,
}) => {
  return (
    <div className="flex justify-center md:justify-start mt-[20px]">
      <div className="flex space-x-4 justify-center md:justify-start">
        <button
          onClick={onSave}
          disabled={!isChanged || isPending}
          className={`w-[120px] md:w-[160px] px-4 py-2 font-bold uppercase rounded  ${
            isChanged && !isPending
              ? "bg-black text-white hover:bg-gray"
              : "bg-light-grey text-dark-gray cursor-not-allowed"
          }`}
        >
          {isPending ? "Saving..." : "Save"}
        </button>

        <button
          onClick={onCancel}
          className="w-[120px] md:w-[160px] px-4 py-2 font-bold uppercase border border-gray rounded hover:bg-gray"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
