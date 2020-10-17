import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import backVideo from './videos/back.mp4';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
}

function Home(props) {
    return(
        <div >     
        <div>
          <Button className = "reservationButton">Make A Reservation</Button>
          <video 
            autoPlay
            loop
            muted
            style = {{
                position : "absolute",
                width : "100%",
                left : "50%",
                top : "50%",
                height : "100%",
                objectFit : "cover",
                transform : "translate(-50%, -50%)",
                zIndex : "-1"

                
            }}>
              <source src = {backVideo} type = "video/mp4"/>
            </video>
    
          </div>

       
             <div className="container marginThree">
                <div className="row align-items-start">
                  <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} 
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} 
                        isLoading={props.leaderLoading} 
                        errMess={props.leaderErrMess} />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;