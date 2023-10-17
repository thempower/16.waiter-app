import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeTableRequest, editTableRequest } from '../../../redux/tableReducer';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTableById } from '../../../redux/tableReducer';

const SingleTableForm = () => {

  const navigate = useNavigate();
  const { tableId } = useParams();
  const singleTableData = useSelector(state => getTableById(state, parseInt(tableId)));
  const dispatch = useDispatch();
  const id = singleTableData.id; 
  const [status, setStatus] = useState(singleTableData.status); 
  const [peopleAmount, setPeopleAmount] = useState(singleTableData.peopleAmount); 
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(singleTableData.maxPeopleAmount); 
  const [bill, setBill] = useState(singleTableData.bill);

  const handleEditTable = event => {
    event.preventDefault();
    const thisTable = {
      id: parseInt(id),
      status: status,
      peopleAmount: parseInt(peopleAmount),
      maxPeopleAmount: parseInt(maxPeopleAmount),
      bill: parseInt(bill)
    };
    if (status !== "Busy") {
      thisTable.bill = 0;
    };
    if (status === "Free" || status ==="Cleaning") {
      thisTable.peopleAmount = 0;
      thisTable.maxPeopleAmount = 0;
    };
    dispatch(editTableRequest(thisTable));
    navigate('/'); // -1
  };

  const handleRemoveTable = event => {
    event.preventDefault();
    dispatch(removeTableRequest(id));
    navigate('/'); // -1
  };

  if (maxPeopleAmount > 10) {
    setMaxPeopleAmount(10);
    setPeopleAmount(0);
  };
  if (peopleAmount > maxPeopleAmount) {
    setPeopleAmount(maxPeopleAmount);
  };
  if (maxPeopleAmount < 0 || maxPeopleAmount === "") {
    setMaxPeopleAmount(0);
    setPeopleAmount(0);
  };
  if (peopleAmount < 0 || peopleAmount === "") {
    setPeopleAmount(0);
  };
  if (bill < 0 || bill === "") {
    setBill(0);
  };
 
  if (status === "Busy") {
  return (
    <div>
      <Col className='col-5 d-flex flex-column align-items-start gap-2'>
        <Row className='col-12 mt-3 gap-2'>
          <strong>Status</strong><select className='col-4' name="Status" defaultValue={status}>
            <option value="Free" onClick={event => setStatus(event.target.value)} >Free</option>
            <option value="Busy" onClick={event => setStatus(event.target.value)} >Busy</option>
            <option value="Reserved" onClick={event => setStatus(event.target.value)} >Reserved</option>
            <option value="Cleaning" onClick={event => setStatus(event.target.value)} >Cleaning</option>
          </select>
        </Row>
        <Row className='col-12 mt-3 gap-2'>
          <strong>People</strong><input className='col-1' value={peopleAmount} placeholder='Table peopleAmount...' onChange={event => setPeopleAmount(event.target.value)}></input> / <input className='col-1' value={maxPeopleAmount} placeholder='Table ImaxPeopleAmount...' onChange={event => setMaxPeopleAmount(event.target.value)}></input>
        </Row>
        <Row className='col-12 mt-3 gap-2'>
          <strong>Bill $</strong><input className='col-3' value={bill} placeholder='Table bill...' onChange={event => setBill(event.target.value)}></input>
        </Row>
        <Row className='col-12 mt-3 gap-2'>
          <Button className='col-5 mt-4' onClick={event => handleEditTable(event)} variant="primary">EDIT_TABLE</Button>
        </Row>
        <Row className='col-12 mt-3 mb-5 gap-2'>
          <Button className='col-5 mt-4' onClick={event => handleRemoveTable(event)} variant="danger">REMOVE_TABLE</Button>
        </Row>
      </Col>
    </div>
  );
  } else if (status === "Reserved") {
    return (
      <div>
        <Col className='col-5 d-flex flex-column align-items-start gap-2'>
          <Row className='col-12 mt-3 gap-2'>
            <strong>Status</strong><select className='col-4' name="Status" defaultValue={status}>
              <option value="Free" onClick={event => setStatus(event.target.value)} >Free</option>
              <option value="Busy" onClick={event => setStatus(event.target.value)} >Busy</option>
              <option value="Reserved" onClick={event => setStatus(event.target.value)} >Reserved</option>
              <option value="Cleaning" onClick={event => setStatus(event.target.value)} >Cleaning</option>
            </select>
          </Row>
          <Row className='col-12 mt-3 gap-2'>
              <strong>People</strong><input className='col-1' value={peopleAmount} placeholder='Table peopleAmount...' onChange={event => setPeopleAmount(event.target.value)}></input> / <input className='col-1' value={maxPeopleAmount} placeholder='Table ImaxPeopleAmount...' onChange={event => setMaxPeopleAmount(event.target.value)}></input>
          </Row>
          <Row className='col-12 mt-3 gap-2'>
            <Button className='col-5 mt-4' onClick={event => handleEditTable(event)} variant="primary">EDIT_TABLE</Button>
          </Row>
          <Row className='col-12 mt-3 mb-5 gap-2'>
            <Button className='col-5 mt-4' onClick={event => handleRemoveTable(event)} variant="danger">REMOVE_TABLE</Button>
          </Row>
        </Col>
      </div>
    )
  } else {
    return (
      <div>
        <Col className='col-5 d-flex flex-column align-items-start gap-2'>
          <Row className='col-12 mt-3 gap-2'>
            <strong>Status</strong><select className='col-4' name="Status" defaultValue={status}>
              <option value="Free" onClick={event => setStatus(event.target.value)} >Free</option>
              <option value="Busy" onClick={event => setStatus(event.target.value)} >Busy</option>
              <option value="Reserved" onClick={event => setStatus(event.target.value)} >Reserved</option>
              <option value="Cleaning" onClick={event => setStatus(event.target.value)} >Cleaning</option>
            </select>
          </Row>
          <Row className='col-12 mt-3 gap-2'>
            <Button className='col-5 mt-4' onClick={event => handleEditTable(event)} variant="primary">EDIT_TABLE</Button>
          </Row>
          <Row className='col-12 mt-3 mb-5 gap-2'>
            <Button className='col-5 mt-4' onClick={event => handleRemoveTable(event)} variant="danger">REMOVE_TABLE</Button>
          </Row>
        </Col>
      </div>
    )
  }
};

export default SingleTableForm;