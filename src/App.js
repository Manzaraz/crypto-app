import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  Homepage,
  Navbar,
  News,
} from "./components";
import "../src/App.css";

const App = () => {
  console.log(process.env);

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route index path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "whitesmoke", textAlign: "center" }}
          >
            Cryptoverse
            <br />
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
