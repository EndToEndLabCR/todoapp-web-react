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

export const todoIcons = [
  HomeOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  StarOutlined,
  CheckCircleOutlined,
  Loading3QuartersOutlined,
  FileZipFilled,
];

export const todoLabels = [
  "Home",
  "Today",
  "Week",
  "Importants",
  "Completed",
  "Pending",
  "Archived",
];

export const projectIcons = [HomeOutlined, CalendarOutlined, ScheduleOutlined];
export const projectLabels = ["Work", "Personal", "University"];

export const moreIcons = [SettingOutlined];
export const moreLabels = ["Settings"];

export const generateMenuItems = (
  icons: any[],
  labels: string[],
  prefix = ""
): ItemType[] =>
  icons.map((Icon, index) => ({
    key: `${prefix}${index + 1}`,
    icon: React.createElement(Icon),
    label: labels[index],
  }));

export const groupedMenuItems = () => {
  const todoItems = generateMenuItems(todoIcons, todoLabels, "todo-");
  const projectItems = generateMenuItems(projectIcons, projectLabels, "proj-");
  const moreItems = generateMenuItems(moreIcons, moreLabels, "config-");

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
