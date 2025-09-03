import { Statistic, Card, Tooltip } from "antd";
import { Loading3QuartersOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "../styles/InProgressCard.scss";

export function InProgressCard() {
  return (
    <Tooltip 
      title="Tasks currently being worked on and in active development"
      placement="top"
    >
      <Card className="in-progress-card">
        <Statistic
          title={
            <span className="in-progress-title">
              In progress
              <InfoCircleOutlined className="info-icon" />
            </span>
          }
          value={10}
          prefix={<Loading3QuartersOutlined className="in-progress-icon" />}
        />
      </Card>
    </Tooltip>
  );
}
