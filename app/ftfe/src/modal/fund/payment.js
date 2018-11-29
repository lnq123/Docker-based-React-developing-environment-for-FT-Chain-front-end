import React from "react";
import { Row, Col, Button } from "antd";
import faker from "faker";
import Mock from 'mockjs'
export default () => (
  <Row>
    <Col span={8} style={{}}>
      <div
        style={{
          fontSize: "24px",
          fontWeight: 500,
          color: "rgba(74,74,74,1)",
          lineHeight: "33px",
          padding: "24px 0 0 20px"
        }}
      >
        ￥69
      </div>
    </Col>
    <Col span={16} style={{}}>
      <div
        style={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#9B9B9B",
          lineHeight: "14px",
          padding: "30px 0px 0px 75px"
        }}
      >
        限 2,000 名 |
        <span
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#0058D1",
            lineHeight: "14px"
          }}
        >
          {" "}
          剩 1,000名
        </span>
      </div>
    </Col>
    <Col span={24} style={{ textAlign: "center" }}>
      <img
        src={faker.image.animals()} alt={Mock.Random.image('200x100', '#50B347', '#FFF', '有图')}
        style={{ width: 70, height: 70, borderRadius: 4 }}
      />
      <img
        style={{ width: 70, height: 70, borderRadius: 4, margin: " 0 10px" }}
        src={faker.image.cats()} alt={Mock.Random.image('200x100', '#50B347', '#FFF', '有图')}
      />
      <img
        style={{ width: 70, height: 70, borderRadius: 4 }}
        src={faker.image.fashion()} alt={Mock.Random.image('200x100', '#50B347', '#FFF', '有图')}
      />
    </Col>
    <Col span={24}>
      <div
        style={{
          fontSize: "16px",
          fontWeight: 400,
          color: "rgba(74,74,74,1)",
          lineHeight: "22px",
          margin: "15px 0 10px 25px",
        }}
      >
        的條別然所日怕了影近意，生言有我感際英面，別一他草；社團時任光地？住情半電地裡看畫朋我我室劇。樂不外我我室劇的條別然所日怕了影近意，生言有我感際英面，別一他草；社團時
      </div>
    </Col>
    <Col span={24}>
      <div
        style={{
          fontSize: "16px",
          fontWeight: 400,
          color: "rgba(74,74,74,1)",
          lineHeight: "22px",
          textAlign: "center"
        }}
      >
        交付期限：项目成功后<span style={{ color: "#FF1367" }}> 100天 </span>内
      </div>
    </Col>
    <Col span={24} style={{ textAlign: "center" }}>
      <Button
        style={{
          width: "130px",
          height: "35px",
          background:
            "linear-gradient(270deg,rgba(64,102,254,1) 0%,rgba(255,91,205,1) 100%)",
          borderRadius: "18px",
          fontSize: "14px",
          fontWeight: 400,
          color: "rgba(255,255,255,1)",
          lineHeight: "16px",
          textAlign: "center"
        }}
      >
        支持 ￥69
      </Button>
    </Col>
  </Row>
);
