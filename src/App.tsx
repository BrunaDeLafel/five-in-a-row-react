import React, { useState } from 'react';
import logo from './logo.svg';
import { Layout } from 'antd';
import './App.css';

const { Content, Sider } = Layout

function App() {

  /* const [collapsed, setCollapsed] = useState<boolean>(false);

  const takeCollapsed = (value: boolean): void => {
    setCollapsed(value);
  } */

  return (
    <div className="App">
      <Layout className="appContainer">
        {/**五子棋棋盘部分 */}
        <Content className="gamePalace"></Content>
        {/**对战侧边栏 */}
        <Sider className="gameNav" width={400}>
          {/**对手阵容 */}
          <div className="opponentCard">
            <div className="player-title"><span style={{fontSize: 45}}>🦹‍♀️</span>{'\u00A0'}{'\u00A0'}{'玩家名称2'}</div>
            <div className="player-data"></div>
            <div className="player-data"></div>
          </div>
          <div className="slider-cut"></div>
          {/**我方阵容 */}
          <div className="mineCard">
            <div className="player-title"><span style={{fontSize: 45}}>🧝🏻‍♂️</span>{'\u00A0'}{'\u00A0'}{'玩家名称1'}</div>
            <div className="player-data"></div>
            <div className="player-data"></div>
          </div>
        </Sider>
      </Layout>
    </div>
  );
}

export default App;
export {}
