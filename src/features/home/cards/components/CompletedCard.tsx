import { Statistic, Card, Tooltip } from "antd";
import { CheckCircleOutlined, InfoCircleOutlined, TrophyOutlined } from "@ant-design/icons";
import "../styles/CompletedCard.scss";

export function CompletedCard() {
  return (
    <Tooltip 
      title="Tasks that have been successfully completed and marked as done"
      placement="top"
    >
      <Card className="completed-card">
        <div className="card-background-pattern"></div>
        <div className="card-content">
          <div className="icon-section">
            <div className="main-icon-container">
              <CheckCircleOutlined className="completed-icon" />
              <div className="icon-ring"></div>
            </div>
            <div className="secondary-icon">
              <TrophyOutlined />
            </div>
          </div>
          <div className="stats-section">
            <Statistic
              title={
                <span className="completed-title">
                  Completed
                  <InfoCircleOutlined className="info-icon" />
                </span>
              }
              value={25}
              className="statistic-custom"
            />
          </div>
        </div>
      </Card>
    </Tooltip>
  );
}
