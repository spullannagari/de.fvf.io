import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ResultsTable from "./resultsTable/ResultsTable";
import Container from "react-bootstrap/Container";
import Modal from "react-modal";
import {
  addTestCase,
  selectedTestCase,
  setSelectedTestCase,
  modalState,
  setModalState,
} from "./resultsTable/resultsSlice";

function App() {
  const ismodalOpen = useSelector(modalState);
  const testCaseToModify = useSelector(selectedTestCase);

  const dispatch = useDispatch();

  const [useCase, setUseCase] = useState("");
  const [bundleFeeCharged, setBundleFeeCharged] = useState("");
  const [intlFeeCharged, setIntlFeeCharged] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [notes, setNotes] = useState("");

  function openModal() {
    dispatch(setModalState(true));
  }

  useEffect(() => {
    setUseCase(testCaseToModify?.testCase);
    setBundleFeeCharged(testCaseToModify?.bundleFeeCharged);
    setIntlFeeCharged(testCaseToModify?.intlFeeCharged);
    setSellerId(testCaseToModify?.SellerId);
    setOrderId(testCaseToModify?.orderId);
    setNotes(testCaseToModify?.notes);
  }, [
    testCaseToModify?.SellerId,
    testCaseToModify?.bundleFeeCharged,
    testCaseToModify?.intlFeeCharged,
    testCaseToModify?.notes,
    testCaseToModify?.orderId,
    testCaseToModify?.testCase,
  ]);

  function closeModal() {
    dispatch(setModalState(false));
    dispatch(setSelectedTestCase({}));
    setBundleFeeCharged("");
    setIntlFeeCharged("");
    setNotes("");
    setOrderId("");
    setSellerId("");
    setUseCase("");
  }

  function handleSubmit() {
    const test = {
      testCase: useCase,
      bundleFeeCharged,
      intlFeeCharged,
      sellerId,
      orderId,
      notes,
    };
    dispatch(addTestCase(test));
    dispatch(setModalState(false));
  }

  return (
    <Container>
      <div className="App pt-3 pb-3">
        DE C2C test data for final value fee (FVF) testing
      </div>
      <button onClick={openModal} className="btn btn-primary">
        Add Test case
      </button>
      <ResultsTable />
      <Modal
        isOpen={ismodalOpen}
        contentLabel="Test case Modal"
        ariaHideApp={false}
      >
        <button onClick={closeModal} className="btn btn-danger">
          close
        </button>
        <div className="">
          <label htmlFor="useCase1" className="col-form-label">
            Use Case
          </label>
          <input
            type="text"
            id="useCase1"
            className="form-control"
            aria-describedby="useCase1"
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="bundleFeesCharged1" className="col-form-label">
            Bundle Fees Charged
          </label>
          <input
            type="text"
            id="bundleFeesCharged1"
            className="form-control"
            aria-describedby="bundleFeesCharged1"
            value={bundleFeeCharged}
            onChange={(e) => setBundleFeeCharged(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="intlFeesCharged1" className="col-form-label">
            Intl Fees Charged
          </label>
          <input
            type="text"
            id="intlFeesCharged1"
            className="form-control"
            aria-describedby="intlFeesCharged1"
            value={intlFeeCharged}
            onChange={(e) => setIntlFeeCharged(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="SellerId1" className="col-form-label">
            Seller Id
          </label>
          <input
            type="text"
            id="SellerId1"
            className="form-control"
            aria-describedby="SellerId1"
            value={sellerId}
            onChange={(e) => setSellerId(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="OrderId1" className="col-form-label">
            OrderId
          </label>
          <input
            type="text"
            id="OrderId1"
            className="form-control"
            aria-describedby="OrderId1"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="Notes1" className="col-form-label">
            Notes
          </label>
          <textarea
            id="Notes1"
            name="Notes1"
            className="form-control"
            rows="5"
            cols="33"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button className="btn btn-secondary mt-3 mb-3" onClick={handleSubmit}>
          Submit
        </button>
      </Modal>
    </Container>
  );
}

export default App;
