"use client";

import React, { useState } from "react";
import PersonalData from "../personal-data/PersonalData";
import OrderRecipients from "../order-recipients/OrderRecipients";
import Contacts from "../contacts/Contacts";
import DeliveryAdress from "../delivery-adress/DeliveryAdress";
import Login from "../login/Login";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const tabs: Tab[] = [
  { id: "personal", label: "Personal Data", content: <PersonalData /> },
  {
    id: "order_recipient",
    label: "My order rercipients",
    content: <OrderRecipients />,
  },
  { id: "contacts", label: "Contacts", content: <Contacts /> },
  { id: "adress", label: "Delivery adress", content: <DeliveryAdress /> },
  { id: "login", label: "Login", content: <Login /> },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div>
      <div
        className="flex space-x-4 overflow-x-auto scrollbar-hide "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`uppercase font-black text-[20px] whitespace-nowrap flex items-center gap-2 px-4 py-2 transition-colors ${
              activeTab === tab.id ? "text-black" : "text-gray"
            }`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
          >
            <span
              className={`block w-3 h-3 rounded-sm ${
                activeTab === tab.id
                  ? "bg-flash-green border border-black"
                  : "bg-medium-grey"
              }`}
            ></span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                id={`tabpanel-${tab.id}`}
                role="tabpanel"
                className="transition-opacity duration-300 ease-in-out"
              >
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;
