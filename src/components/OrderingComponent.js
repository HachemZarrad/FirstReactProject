import React, { Component } from 'react';
import { Label, Button, Row, Col } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));



class Ordering extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


handleSubmit = (values) => {
    this.props.postFoodOrder(values);
    //this.props.resetFeedbackForm();
}


render()  {

        return(
          <div className=" reservationBack marginReservBack">
              <div className = "marginBack">
                    <img src="assets/images/h13.png" height="150" width="1600"
                                /> 
                 </div>
              <div className="col-12 col-md-3 ReservationText">
                    <h1>Orders</h1>
                    <p className="ReserText">Some areas.....</p>
              </div>
              <div className="col-12 col-md-6 ReservationForm">
                        <Form model ="foodOrder" onSubmit={(values) => this.handleSubmit(values)}>
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
                                <Label htmlFor="city" md={3}>City*</Label>
                                <Col md={10}>
                                    <Control.text model=".city" id="city" name="city"
                                      
                                        className="form-control input"
                                        validators={{
                                            required
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".city"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                     />
                                </Col>
                            </Row>
                             
                            <Row className="form-group ">
                                <Label htmlFor="adress" md={3}>Address*</Label>
                                <Col md={10}>
                                    <Control.text model=".adress" id="adress" name="adress"
                                      
                                        className="form-control input"
                                        validators={{
                                            required
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".adress"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                           

                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group marginDatePicker">
                                  <Label htmlFor="Time" md={3}>Time*</Label>
                                  <Col md={10}>
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
                                    <Button type="submit" color="primary">
                                    ORDER
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>          
           
        );
    }

}

export default Ordering;