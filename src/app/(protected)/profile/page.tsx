import React from "react";

import ProfileIcon from "@/assets/icons/profile.svg";
import Image from "next/image";
import { Breadcrumb } from "@/ui-kit/composite-components";
import ProfileTabs from "@/ui-kit/composite-components/profile/tabs/ProfileTabs";

const breadcrumbItems = [
  {
    title: "Profile",
    Icon: <Image src={ProfileIcon} alt="profile icon" />,
  },
];

const Profile = () => {
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-[32px] font-black uppercase">Profile</h1>
      <ProfileTabs />
    </div>
  );
};

export default Profile;
