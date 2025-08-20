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
  label: string;
  icon: React.ComponentType<any>;
};
export const todoItemsData: MenuItemInfo[] = [
  { label: "Home", icon: HomeOutlined },
  { label: "Today", icon: CalendarOutlined },
  { label: "Week", icon: ScheduleOutlined },
  { label: "Importants", icon: StarOutlined },
  { label: "Completed", icon: CheckCircleOutlined },
  { label: "Pending", icon: Loading3QuartersOutlined },
  { label: "Archived", icon: FileZipFilled },
];

export const projectItemsData: MenuItemInfo[] = [
  { label: "Work", icon: HomeOutlined },
  { label: "Personal", icon: CalendarOutlined },
  { label: "University", icon: ScheduleOutlined },
];

export const moreItemsData: MenuItemInfo[] = [
  { label: "Settings", icon: SettingOutlined },
];

export const generateMenuItems = (
  items: MenuItemInfo[],
  prefix = ""
): ItemType[] =>
  items.map(({ label, icon }, index) => ({
    key: `${prefix}${index + 1}`,
    icon: React.createElement(icon),
    label,
  }));

export const groupedMenuItems = () => {
  const todoItems = generateMenuItems(todoItemsData, "todo-");
  const projectItems = generateMenuItems(projectItemsData, "proj-");
  const moreItems = generateMenuItems(moreItemsData, "config-");

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
