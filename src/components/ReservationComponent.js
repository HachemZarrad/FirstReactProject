import React, { Component, useState } from 'react';
import { Card,  CardText, CardBody, Label,
 Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';
import DatePicker from 'react-datepicker';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function Reservation()  {


        const [selectedDate, setSelectedDate] = useState(null);
        return(
          <div className=" reservationBack marginReservBack">
              <div className = "marginBack">
                    <img src="assets/images/h12.png" height="150" width="1600"
                                /> 
                 </div>
              <div className="col-12 col-md-3 ReservationText">
                    <h1>Reservations</h1>
                    <p className="ReserText">For parties of six or more, we recommend making reservations at least two weeks in advance. For walk-ins, we only seat parties on a first come, first served basis.</p>
              </div>
              <div className="col-12 col-md-6 ReservationForm">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Label htmlFor="firstname" md={2} className = "marginFirstName">First Name*</Label>
                            <Label htmlFor="lastname" md={2} className = "marginLastName">Last Name*</Label>
                            <Row className="form-group">
                                
                                <Col md={5}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        className="form-control input"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                                
                                <Col md={5} >
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        
                                        className="form-control input"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group ">
                                <Label htmlFor="telnum" md={3}>Phone Number*</Label> 
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                       
                                        className="form-control input"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                             
                            <Row className="form-group ">
                                <Label htmlFor="email" md={3}>Email Address</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                      
                                        className="form-control input"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group marginDatePicker">
                                  <Label htmlFor="Date" md={3}>Date*</Label>
                                  <Col md={10}>
                                  <DatePicker
                                      className = " input"
                                      selected = {selectedDate}
                                      onChange = {date => setSelectedDate(date)}
                                      dateFormat = 'dd/MM/yyyy'
                                      minDate = {new Date()}
                                      isClearable
                                      />
                                </Col>
                            </Row>
                            
                            <Row className="form-group ">
                                <Label htmlFor="email" md={3}>Number Of Guests*</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                      
                                        className="form-control input"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="email" md={3}>Comments</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                      
                                        className="form-control input"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                           
                            
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
             
            
                
            
           
        );
    }



export default Reservation;