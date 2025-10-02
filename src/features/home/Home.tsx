import { Typography, Row, Col, Badge, Divider, Card, Space } from "antd";
import { DashboardOutlined, BarChartOutlined } from "@ant-design/icons";
import { 
  CompletedCard, 
  InProgressCard, 
  PendingCard, 
  ArchivedCard, 
  CancelledCard, 
  UrgentCard 
} from "./cards";
import "./Home.scss";

const { Title, Text } = Typography;

export function Home() {
  const totalTasks = 53;
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Card className="dashboard-header" bodyStyle={{ padding: '32px 40px' }}>
          <div className="header-content">
            <div className="header-left">
              <div className="icon-container">
                <DashboardOutlined className="dashboard-icon" />
                <div className="icon-glow"></div>
              </div>
              <div className="title-section">
                <Title level={1} className="dashboard-title">
                  Task Overview
                </Title>
                <Text type="secondary" className="dashboard-subtitle">
                  Monitor your task progress and productivity metrics
                </Text>
                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-number">{totalTasks}</span>
                    <span className="stat-label">Total Tasks</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">87%</span>
                    <span className="stat-label">Completion Rate</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-right">
              <Badge 
                count={totalTasks} 
                showZero 
                color="#1890ff"
                className="total-badge"
              >
                <div className="stats-icon-container">
                  <BarChartOutlined className="stats-icon" />
                  <div className="stats-glow"></div>
                </div>
              </Badge>
            </div>
          </div>
        </Card>
        
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-content">
            <span className="divider-text">Task Status Overview</span>
          </div>
          <div className="divider-line"></div>
        </div>
        
        <Row gutter={[24, 24]} className="dashboard-grid">
          <Col xs={24} sm={12} lg={8} xl={8}>
            <CompletedCard />
          </Col>
          <Col xs={24} sm={12} lg={8} xl={8}>
            <InProgressCard />
          </Col>
          <Col xs={24} sm={12} lg={8} xl={8}>
            <PendingCard />
          </Col>
          <Col xs={24} sm={12} lg={8} xl={8}>
            <ArchivedCard />
          </Col>
          <Col xs={24} sm={12} lg={8} xl={8}>
            <CancelledCard />
          </Col>
          <Col xs={24} sm={12} lg={8} xl={8}>
            <UrgentCard />
          </Col>
        </Row>
      </div>
    </div>
  );
}
