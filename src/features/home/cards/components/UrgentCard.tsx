import { Statistic, Card } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "../styles/UrgentCard.scss";

export function UrgentCard() {
  return (
    <Card className="urgent-card">
      <Statistic
        title={<span className="urgent-title">Urgent</span>}
        value={4}
        prefix={<BellOutlined className="urgent-icon" />}
      />
    </Card>
  );
}
