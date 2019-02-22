import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Item from './Item';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export default class Items extends Component {
  render() {
    return (
      <Center>
        <div>
          <Query query={ALL_ITEMS_QUERY}>
            {({ data, error, loading }) => {
              console.log(data);
              if (loading) return <p>loading...</p>;
              if (error) return <p>Error: {error.message}</p>;
              return (
                <ItemsList>
                  {data.items.map(item => <Item key={item.id} item={item} />)}
                </ItemsList>
              )
            }}
          </Query>
        </div>
      </Center>
    )
  }
}

export { ALL_ITEMS_QUERY };
