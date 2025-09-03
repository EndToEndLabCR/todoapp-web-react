import { Statistic, Card, Tooltip } from "antd";
import { CheckCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "../styles/CompletedCard.scss";

export function CompletedCard() {
  return (
    <Tooltip 
      title="Tasks that have been successfully completed and marked as done"
      placement="top"
    >
      <Card className="completed-card">
        <Statistic
          title={
            <span className="completed-title">
              Completed
              <InfoCircleOutlined className="info-icon" />
            </span>
          }
          value={25}
          prefix={<CheckCircleOutlined className="completed-icon" />}
          valueStyle={{ className: "completed-value" }}
        />
      </Card>
    </Tooltip>
  );
}
