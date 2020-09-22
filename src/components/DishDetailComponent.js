import React from 'react';
import { Card, CardImg, CardText, CardBody,CardImgOverlay,Media,
  CardTitle } from 'reactstrap';

  
     
      function RenderDish({dish}){
          return(
              <Card>
                 <CardImg width ="100%" src={dish.image} alt={dish.name} />
                 <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                 </CardBody>
              </Card>
          );

      }

      function RenderComments({dish}) {
          const comments = dish.comments.map((comment) => {
          return (
            <div >
                        
                <div key={comment.id}>
                     <p>{comment.comment}</p>
                     <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', 
                     { year: 'numeric',
                      month: 'short', 
                      day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
                   
             </div>
          )
        });
        if (comments){
            return (
                <div className="col-12 col-md-12">
                  <h4>Comments</h4>
                  {comments}
                </div>
              );
        }
        else{
            return(
                <div><h1></h1></div>
            );
        }
          
    }

    const  DishDetail = (props) => {
            const dish = props.dish;
            if(dish){
              return(
                <div className="container ">
                    <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish = {dish}/>
                    </div>

                    <div className="col-12 col-md-5">
                        <RenderComments dish = {dish}/>
                    </div>
                 </div>
                </div>
            );
            }

            else{
                return (
                    <div></div>
                );
            }


      }

  
  export default DishDetail;