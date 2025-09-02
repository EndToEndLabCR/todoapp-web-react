import { Statistic, Card } from "antd";
import { FileZipFilled } from "@ant-design/icons";
import "../styles/ArchivedCard.scss";

export function ArchivedCard() {
  return (
    <Card className="archived-card">
      <Statistic
        title={<span className="archived-title">Archived</span>}
        value={3}
        prefix={<FileZipFilled className="archived-icon" />}
        valueStyle={{ className: "archived-value" }}
      />
    </Card>
  );
}
