import { Statistic, Card } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import "../styles/PendingCard.scss";

export function PendingCard() {
  return (
    <Card className="pending-card">
      <Statistic
        title={<span className="pending-title">Pending</span>}
        value={5}
        prefix={<ClockCircleOutlined className="pending-icon" />}
        valueStyle={{ className: "pending-value" }}
      />
    </Card>
  );
}
