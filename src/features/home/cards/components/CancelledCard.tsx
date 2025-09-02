import { Statistic, Card } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "../styles/CancelledCard.scss";

export function CancelledCard() {
  return (
    <Card className="cancelled-card">
      <Statistic
        title={<span className="cancelled-title">Cancelled</span>}
        value={6}
        prefix={<CloseCircleOutlined className="cancelled-icon" />}
        valueStyle={{ className: "cancelled-value" }}
      />
    </Card>
  );
}
