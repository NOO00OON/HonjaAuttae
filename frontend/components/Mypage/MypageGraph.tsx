import { NextPage } from 'next';
import { GraphBlock, GraphWrapper } from './Mypage.style';
import MypageChart from '../Charts/MypageChart';
import PieChart from '../Charts/PieChart';

const MypageGraph: NextPage = () => {
  return (
    <>
      <GraphWrapper>
        <div className="subTitle">π κ°μΈ μ¬ν λΆμ</div>
        <GraphBlock>
          <div className="LGraph">
            <div>μλ³ μ¬ν λΆμ</div>
            <MypageChart />
          </div>
          <div className="RGraph">
            <div>μ§μ­ μ¬ν λΆμ</div>
            <PieChart />
          </div>
        </GraphBlock>
      </GraphWrapper>
    </>
  );
};

export default MypageGraph;
