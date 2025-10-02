import { Statistic, Card, Tooltip } from "antd";
import { ClockCircleOutlined, InfoCircleOutlined, HourglassOutlined } from "@ant-design/icons";
import "../styles/PendingCard.scss";

export function PendingCard() {
  return (
    <Tooltip 
      title="Tasks that are waiting to be started or assigned"
      placement="top"
    >
      <Card className="pending-card">
        <div className="card-background-pattern"></div>
        <div className="card-content">
          <div className="icon-section">
            <div className="main-icon-container">
              <ClockCircleOutlined className="pending-icon" />
              <div className="icon-ring"></div>
            </div>
            <div className="secondary-icon">
              <HourglassOutlined />
            </div>
          </div>
          <div className="stats-section">
            <Statistic
              title={
                <span className="pending-title">
                  Pending
                  <InfoCircleOutlined className="info-icon" />
                </span>
              }
              value={5}
              className="statistic-custom"
            />
          </div>
        </div>
      </Card>
    </Tooltip>
  );
}
