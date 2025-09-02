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
      <Card className="dashboard-header" bodyStyle={{ padding: '24px 32px' }}>
        <Space align="center" size="large">
          <DashboardOutlined className="dashboard-icon" />
          <div>
            <Title level={1} className="dashboard-title">
              Task Overview
            </Title>
            <Text type="secondary" className="dashboard-subtitle">
              Monitor your task progress and productivity
            </Text>
          </div>
          <Badge 
            count={totalTasks} 
            showZero 
            color="#1890ff"
            className="total-badge"
          >
            <BarChartOutlined className="stats-icon" />
          </Badge>
        </Space>
      </Card>
      
      <Divider className="section-divider" />
      
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
  );
}
