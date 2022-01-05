import { Col, Collapse, Row, Typography } from "antd";
import HTMLReactParser from "html-react-parser";
import millify from "millify";

import { Loader } from ".";
import Avatar from "antd/lib/avatar/avatar";
import { useGetExchangesQuery } from "../services/cryptoApi";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
  console.log(exchangesList);

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {/* {exchangesList.map((el) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={el.uuid}
                showArrow={false}
                header={
                  <Row key={el.uuid}>
                    <Col span={6}>
                      <Text>
                        <strong>{el.rank}. </strong>
                      </Text>
                      <Avatar className="exchange-image" src={el.iconUrl} />
                      <Text>
                        <strong>{el.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(el.volume)}</Col>
                    <Col span={6}>${millify(el.numberOfMarkets)}</Col>
                    <Col span={6}>${millify(el.marketShare)}%</Col>
                  </Row>
                }
              >
                {HTMLReactParser(el.description || "")}
              </Panel>
            </Collapse>
          </Col>
        ))} */}
      </Row>
    </>
  );
};

export default Exchanges;
