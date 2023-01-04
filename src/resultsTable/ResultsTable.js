import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { testCases, setSelectedTestCase, setModalState } from "./resultsSlice";

export default function ResultsTable() {
  const testData = useSelector(testCases);
  const dispatch = useDispatch();

  function handleClick(data) {
    dispatch(setSelectedTestCase(data));
    dispatch(setModalState(true));
  }

  return (
    <table className="table mt-3">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Use case</th>
          <th scope="col">Bundle Fees Charged</th>
          <th scope="col">Intl Fees Charged</th>
          <th scope="col">Seller Id</th>
          <th scope="col">OrderId</th>
          <th scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        {testData.map((data) => (
          <tr key={data.id} onClick={() => handleClick(data)}>
            <th scope="row">{data.id}</th>
            <td>{data.testCase}</td>
            <td>{data.bundleFeeCharged}</td>
            <td>{data.intlFeeCharged}</td>
            <td>{data.SellerId}</td>
            <td>{data.orderId}</td>
            <td dangerouslySetInnerHTML={{ __html: data.notes }}></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
