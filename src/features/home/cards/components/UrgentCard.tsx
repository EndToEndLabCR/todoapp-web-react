import { Statistic, Card, Tooltip } from "antd";
import { BellOutlined, InfoCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import "../styles/UrgentCard.scss";

export function UrgentCard() {
  return (
    <Tooltip 
      title="Tasks that require immediate attention and have high priority"
      placement="top"
    >
      <Card className="urgent-card">
        <div className="card-background-pattern"></div>
        <div className="card-content">
          <div className="icon-section">
            <div className="main-icon-container">
              <BellOutlined className="urgent-icon" />
              <div className="icon-ring"></div>
            </div>
            <div className="secondary-icon">
              <ExclamationCircleOutlined />
            </div>
          </div>
          <div className="stats-section">
            <Statistic
              title={
                <span className="urgent-title">
                  Urgent
                  <InfoCircleOutlined className="info-icon" />
                </span>
              }
              value={4}
              className="statistic-custom"
            />
          </div>
        </div>
      </Card>
    </Tooltip>
  );
}
