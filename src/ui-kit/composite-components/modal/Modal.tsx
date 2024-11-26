import React from "react";

import ModalImage from "@/assets/images/sure.png";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  imageSrc: string; // Шлях до вашого зображення
  title: string; // Підпис заголовка
  confirmText: string; // Текст для кнопки підтвердження
  cancelText: string; // Текст для кнопки скасування
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmText,
  cancelText,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[400px] md:w-[500px] p-6 relative">
        {/* Заголовок і кнопка закриття */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold uppercase">{title}</h2>
          <button onClick={onClose} className="text-black hover:text-gray-600">
            ✕
          </button>
        </div>

        {/* Зображення */}
        <div className="flex justify-center mb-10">
          <Image src={ModalImage} alt="Placeholder" />
        </div>

        {/* Кнопки */}
        <div className="flex justify-between mt-6">
          <button
            onClick={onConfirm}
            className="w-[200px] px-4 py-2 bg-black text-white font-bold uppercase rounded hover:bg-gray-800"
          >
            {confirmText}
          </button>
          <button
            onClick={onClose}
            className="w-[200px] px-4 py-2 border border-gray-300 text-black font-bold uppercase rounded hover:bg-gray-100"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
