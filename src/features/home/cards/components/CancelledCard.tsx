import { Statistic, Card, Tooltip } from "antd";
import { CloseCircleOutlined, InfoCircleOutlined, StopOutlined } from "@ant-design/icons";
import "../styles/CancelledCard.scss";

export function CancelledCard() {
  return (
    <Tooltip 
      title="Tasks that have been cancelled or terminated"
      placement="top"
    >
      <Card className="cancelled-card">
        <div className="card-background-pattern"></div>
        <div className="card-content">
          <div className="icon-section">
            <div className="main-icon-container">
              <CloseCircleOutlined className="cancelled-icon" />
              <div className="icon-ring"></div>
            </div>
            <div className="secondary-icon">
              <StopOutlined />
            </div>
          </div>
          <div className="stats-section">
            <Statistic
              title={
                <span className="cancelled-title">
                  Cancelled
                  <InfoCircleOutlined className="info-icon" />
                </span>
              }
              value={6}
              className="statistic-custom"
            />
          </div>
        </div>
      </Card>
    </Tooltip>
  );
}
