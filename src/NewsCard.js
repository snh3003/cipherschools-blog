import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const NewsCard = (props) => (
    <div>
        <Card
          image={props.img}
          header={props.author}
          meta={props.name}
          description={props.content}
          extra={extra}
        />
    </div>
  
)

export default NewsCard;