import { Statistic, Card, Tooltip } from "antd";
import { Loading3QuartersOutlined, InfoCircleOutlined, RocketOutlined } from "@ant-design/icons";
import "../styles/InProgressCard.scss";

export function InProgressCard() {
  return (
    <Tooltip 
      title="Tasks currently being worked on and in active development"
      placement="top"
    >
      <Card className="in-progress-card">
        <div className="card-background-pattern"></div>
        <div className="card-content">
          <div className="icon-section">
            <div className="main-icon-container">
              <Loading3QuartersOutlined className="in-progress-icon" />
              <div className="icon-ring"></div>
            </div>
            <div className="secondary-icon">
              <RocketOutlined />
            </div>
          </div>
          <div className="stats-section">
            <Statistic
              title={
                <span className="in-progress-title">
                  In progress
                  <InfoCircleOutlined className="info-icon" />
                </span>
              }
              value={10}
              className="statistic-custom"
            />
          </div>
        </div>
      </Card>
    </Tooltip>
  );
}
