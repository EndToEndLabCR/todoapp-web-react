import type { MenuProps } from "antd";

type NotificationItemInfo = {
  key: string;
  label: string;
  description?: string;
  time?: string;
};

export const notificationItemsData: NotificationItemInfo[] = [
  {
    key: "notif-1",
    label: "New task assigned",
    description: "You have been assigned a new task in the Work project",
    time: "2 minutes ago",
  },
  {
    key: "notif-2", 
    label: "Task completed",
    description: "Your task 'Review documents' has been completed",
    time: "1 hour ago",
  },
  {
    key: "notif-3",
    label: "Project update",
    description: "The Personal project has been updated with new features",
    time: "3 hours ago",
  },
];

export const generateNotificationItems = (): MenuProps["items"] => {
  return notificationItemsData.map((item) => ({
    key: item.key,
    label: (
      <div style={{ padding: "4px 0" }}>
        <div style={{ fontWeight: 500, marginBottom: "2px" }}>
          {item.label}
        </div>
        <div style={{ fontSize: "12px", color: "#666", marginBottom: "2px" }}>
          {item.description}
        </div>
        <div style={{ fontSize: "11px", color: "#999" }}>
          {item.time}
        </div>
      </div>
    ),
  }));
};
