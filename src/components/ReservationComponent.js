import React, {Component, useState } from 'react';
import { Label, Button, Row, Col } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import DatePicker from 'react-datepicker';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


function Reservation(props) {
        const [selectedDate, setSelectedDate] = useState(null);
        console.log("hadate",selectedDate);
        console.log("hadateS",JSON.stringify(selectedDate));
        
        return(
          <div className=" reservationBack marginReservBack">
              <div className = "marginBack">
                    <img src="assets/images/h13.png" height="150" width="1600"
                                /> 
                 </div>
              <div className="col-12 col-md-3 ReservationText">
                    <h1>Reservations</h1>
                    <p className="ReserText">For parties of six or more, we recommend making reservations at least two weeks in advance. For walk-ins, we only seat parties on a first come, first served basis.</p>
              </div>
              <div className="col-12 col-md-6 ReservationForm">
                        <Form model="reservation" onSubmit={(values) => props.postReservation(values)}>
                            <Label htmlFor="firstname" md={3} className = "marginFirstName">First Name*</Label>
                            <Label htmlFor="lastname" md={3} className = "marginLastName">Last Name*</Label>
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
                                <Label htmlFor="phoneNumber" md={3}>Phone Number*</Label> 
                                <Col md={10}>
                                    <Control.text model=".phoneNumber" id="phoneNumber" name="phoneNumber"
                                       
                                        className="form-control input"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".phoneNumber"
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
                            <Label htmlFor="Date" md={2} className = "marginDate">Date*</Label>
                            <Label htmlFor="Time" md={2} className = "marginTime">Time*</Label>
                            <Row className="form-group marginDatePicker">
                                  
                                  <Col md={5}>
                                    
                           
                                       <Control.text model=".date" id="date" name="date"   onChange = {JSON.stringify(selectedDate)} >
                                            
                                      </Control.text> 
                                    
                                      <DatePicker 
                                            
                                            className="form-control input"
                                            selected = {selectedDate}
                                            onChange = {date => setSelectedDate(date)}
                                            dateFormat = 'dd/MM/yyyy'
                                            minDate = {new Date()}
                                            isClearable
                                        
                                        />
                        
                                </Col>
                                
                                <Col md={5}>
                                    <Control.select model=".time" id="time" className=" form-control input">
                                            <option disabled className = "try">Lunch</option>
                                            <option >12:00 pm</option>
                                            <option>1:00 pm</option>
                                            <option>2:00 pm</option>
                                            <option>3:00 pm</option>
                                            <option disabled className = "try">Dinner</option>
                                            <option>6:00 pm</option>
                                            <option>7:00 pm</option>
                                            <option>8:00 pm</option>
                                            <option>9:00 pm</option>
                                            <option>10:00 pm</option>
                                            <option>11:00 pm</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".time"
                                        show="touched"
                                        messages={{
                                            required: 'Time is Required',
                                        }}
                                     />
                                </Col>

                            </Row>
                            
                            <Row className="form-group ">
                                <Label htmlFor="guestsNumber" md={3}>Number Of Guests*</Label>
                                <Col md={10}>
                                    <Control.select model=".guestsNumber" id="guestsNumber" name="guestsNumber"
                                     className="form-control input">
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                     </Control.select>
                                            
                                           
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="comments" md={3}>Comments</Label>
                                <Col md={10}>
                                    <Control.text model=".comments" id="comments" name="comments"
                                      
                                        className="form-control input"
                                    
                                         />
                                   
                                </Col>
                            </Row>
                           
                            
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary" >
                                    SUBMIT
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
           
        );
    }


export default Reservation;