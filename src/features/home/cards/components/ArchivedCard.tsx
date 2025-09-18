import { Statistic, Card, Tooltip } from "antd";
import { FileZipFilled, InfoCircleOutlined, DatabaseOutlined } from "@ant-design/icons";
import "../styles/ArchivedCard.scss";

export function ArchivedCard() {
  return (
    <Tooltip 
      title="Tasks that have been archived and stored for future reference"
      placement="top"
    >
      <Card className="archived-card">
        <div className="card-background-pattern"></div>
        <div className="card-content">
          <div className="icon-section">
            <div className="main-icon-container">
              <FileZipFilled className="archived-icon" />
              <div className="icon-ring"></div>
            </div>
            <div className="secondary-icon">
              <DatabaseOutlined />
            </div>
          </div>
          <div className="stats-section">
            <Statistic
              title={
                <span className="archived-title">
                  Archived
                  <InfoCircleOutlined className="info-icon" />
                </span>
              }
              value={3}
              className="statistic-custom"
            />
          </div>
        </div>
      </Card>
    </Tooltip>
  );
}
