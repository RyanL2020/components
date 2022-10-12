import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>   
                <CommentDetail author="Sam" timeAgo="Today at 4:45pm" text="Have you seen the news!" src={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail author="Alex" timeAgo="Today at 5:15pm" text="What a great day" src={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail author="Jane" timeAgo="Today at 2:45am" text="Whoes up!!" src={faker.image.avatar()}/>
            </ApprovalCard>
           
        </div>

        
    );
};


ReactDom.render(<App />, document.querySelector('#root'));