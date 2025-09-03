import {
  HomeOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  StarOutlined,
  CheckCircleOutlined,
  Loading3QuartersOutlined,
  FileZipFilled,
  FolderOpenOutlined,
  SettingOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import type { ItemType } from "antd/es/menu/interface";

type MenuItemInfo = {
  key: string;
  label: string;
  icon: React.ComponentType<any>;
};
export const todoItemsData: MenuItemInfo[] = [
  { key: "/", label: "Home", icon: HomeOutlined },
  { key: "/calendar/today", label: "Today", icon: CalendarOutlined },
  { key: "/calendar/week", label: "Week", icon: ScheduleOutlined },
  { key: "/calendar/important", label: "Importants", icon: StarOutlined },
  { key: "/calendar/completed", label: "Completed", icon: CheckCircleOutlined },
  { key: "/calendar/pending", label: "Pending", icon: Loading3QuartersOutlined },
  { key: "/calendar/archived", label: "Archived", icon: FileZipFilled },
];

export const projectItemsData: MenuItemInfo[] = [
  { key: "/projects/work", label: "Work", icon: HomeOutlined },
  { key: "/projects/personal", label: "Personal", icon: CalendarOutlined },
  { key: "/projects/university", label: "University", icon: ScheduleOutlined },
];

export const moreItemsData: MenuItemInfo[] = [
  { key: "/more/settings", label: "Settings", icon: SettingOutlined },
];

export const generateMenuItems = (
  items: MenuItemInfo[],
): ItemType[] =>
  items.map(({ key, label, icon }) => ({
    key,
    icon: React.createElement(icon),
    label,
  }));

export const groupedMenuItems = () => {
  const todoItems = generateMenuItems(todoItemsData);
  const projectItems = generateMenuItems(projectItemsData);
  const moreItems = generateMenuItems(moreItemsData);

  return [
    {
      type: "group" as const,
      label: (
        <span className="menu-group-label">
          <CheckCircleOutlined />
          To-Do
        </span>
      ),
      children: todoItems,
    },
    {
      type: "group" as const,
      label: (
        <span className="menu-group-label">
          <FolderOpenOutlined />
          Projects
        </span>
      ),
      children: projectItems,
    },
    {
      type: "group" as const,
      label: (
        <span className="menu-group-label">
          <PlusCircleOutlined />
          More
        </span>
      ),
      children: moreItems,
    },
  ];
};
