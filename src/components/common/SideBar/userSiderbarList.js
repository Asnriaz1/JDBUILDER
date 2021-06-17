import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FibreManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import PersonOutline from "@material-ui/icons/PersonOutline";
import ChatIcon from "@material-ui/icons/Chat";
import SettinsIcon from "@material-ui/icons/Settings";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const user_list = [
	{
		label: "Dashboard",
		icon: <HomeIcon />,
		url: "/user"
	},
	{
		label: "Jobs",
		icon: <BusinessCenter />,
		url: "/jobs",
		children: [
            {
				label: "All",
				icon: <FibreManualRecordIcon />,
				isSubMenu: true,
                url: "/user/all-jobs",
			},
			{
				label: "Completed",
				icon: <FibreManualRecordIcon />,
				isSubMenu: true,
                url: "/user/complete-jobs"
			},
			{
				label: "Incomplete",
				icon: <FibreManualRecordIcon />,
				isSubMenu: true,
                url: "/user/incomplete-jobs",
			},
			{
				label: "In Collaboration",
				icon: <FibreManualRecordIcon />,
				isSubMenu: true,
                url: "/user/incollaboration-jobs",
			},
			{
				label: "Collaboration Complete",
				icon: <FibreManualRecordIcon />,
				isSubMenu: true,
                url: "/user/colcomplete-jobs",
			},
			// {
			// 	label: "Archived JDs",
			// 	icon: <FibreManualRecordIcon />,
			// 	isSubMenu: true,
            //     url: "/user/incomplete-jobs",
            // },
        ],
	},
	{
		label: "Candidates",
		icon: <PersonOutline />,
		url: "/user/candidates",
		url: "",
	},
	{
		label: "Messages",
		icon: <ChatIcon />
	},
	
	{
		label: "About Company",
		icon: <ErrorOutlineIcon />,
		url: "/user/company-settings",
	},
	{
		label: "My Account",
		icon: <SettinsIcon />,
		url: "/user/myaccount"
	},
	{
		label: "Logout",
		icon: <ExitToAppIcon />
	}
];

export default user_list;
