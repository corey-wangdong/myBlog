import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { memoryData } from '../../redux/actions/fetchMemoryData';

import dataAll from '../../mock/数字象形数字.json';
import { fetchMemoryData } from '../../services';
import { MemoryNum } from './memoryNum';

const JiYiXunLian = (props: any) => {
  console.log('props---', props);
  const [memoryData, setMemoryData] = useState<any>([]);
  const [memoryData1, setMemoryData1] = useState<any>([]);

  useEffect(() => {
    (async () => {
      let result = await fetchMemoryData();
      console.log('result---', result);
      let resultData = result.data || {};
      let tempData: any = [];
      Object.keys(resultData).forEach((item) => {
        tempData = [...tempData, ...resultData[item]];
        console.log('item---', item);
      });
      console.log('tempData---', tempData);
      setMemoryData(tempData);
    })();

    //   let result = await fetchMemoryData();
    //   console.log('result---', result);
    //   setMemoryData(result.data || []);
  }, []);

  let data = dataAll.data || [];

  const handleChange = (id: string) => {
    console.log('id----', id);
    setMemoryData1(memoryData);
  };
  return (
    <>
      <div>
        <MemoryNum onchange={handleChange}></MemoryNum>
      </div>
      {memoryData1 && memoryData1.length > 0 && (
        <div className="ji-yi-content">
          {memoryData.length > 0 &&
            memoryData.map((item: any) => {
              return (
                <div className="show-content">
                  <div className="content-box">
                    <span className="contNum">{item.num} : </span>
                    <span className="contMean">{item.mean}</span>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};
// const mapStateToProps = (state: any) => {
//   return { initData: state.initData };
// };
// const mapDispatchToProps = (dispatch: any) => ({
//   testFun: () => dispatch(memoryData()),
// });

export default JiYiXunLian;
// export default connect(mapStateToProps, mapDispatchToProps)(JiYiXunLian);
