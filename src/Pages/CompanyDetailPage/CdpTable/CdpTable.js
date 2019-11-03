import React from "react";
import "./CdpTable.scss";

const CdpTable = props => {
  return (
    <table className="cdp_table">
      <tbody>
        <tr>
          <th>직종</th>
          <td>
            <div className="select_container">
              <select>
                <option>선택</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>FullStack</option>
              </select>
            </div>
          </td>
          <th>연차</th>
          <td>
            <select>
              <option>선택</option>
              <option>신입</option>
              <option>1~3년차</option>
              <option>4년차 이상</option>
            </select>
          </td>
        </tr>

        <tr>
          <th>면접 분위기</th>
          <td>
            <select>
              <option>선택</option>
              <option>긍정적</option>
              <option>부정적</option>
              <option>보통</option>
            </select>
          </td>
          <th>면접 경로</th>
          <td>
            <select>
              <option>선택</option>
              <option>지인 추천</option>
              <option>공개 채용</option>
              <option>온라인 지원</option>
              <option>기타</option>
            </select>
          </td>
        </tr>

        <tr>
          <th>코딩 테스트</th>
          <td>
            <select>
              <option>선택</option>
              <option>없음</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </td>
          <th>면접 결과</th>
          <td>
            <select>
              <option>선택</option>
              <option>합격</option>
              <option>불합격</option>
              <option>대기 중</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CdpTable;
