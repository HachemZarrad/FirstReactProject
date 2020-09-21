import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardImgOverlay,Media,
  CardTitle } from 'reactstrap';

  class DishDetail extends Component {
      constructor(props){
          super (props);
          this.state = {
            doub: null
          }
      }

      renderDish(dish){
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

      renderComments(dish) {
          const comments = dish.comments.map((comment) => {
          return (
            <div >
                        
                        <div key={comment.id} className='row m-1'>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, {new Date(comment.date).toDateString()}</p>
                        </div>
                   
                      </div>
          )
        });
        if (comments){
            return (
                <div className="col-12 col-md-12 row">
                  <h4 className="m-1">Comments</h4>
                  {comments}
                </div>
              );
        }
        else{
            return(
                <div></div>
            );
        }
          
    }

      render(){
            const dish = this.props.selectedDish;
            if(dish){
              return(
                <div className="row">
                    
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                        </div>
                    <div className="col-12 col-md-5">
                        {this.renderComments(dish)}
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

  }


  export default DishDetail;