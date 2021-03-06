import React from 'react';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';

const SuggestedList = styled.li`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: left;
`;

const SuggestedItem = styled.div`
  font-size: 12px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

const SuggestionCard = styled(Card)`
  box-shadow: none !important;
  padding-top: 20px !important;
`;

const ThumbnailImage = styled(Image)`
  width: 300px;
  height: 200px;
  border-radius: 2%;
`;

const StyledSpan = styled.span`
  color: #484848 !important;
`;

const HeaderSpan = styled(StyledSpan)`
  font-size: 12px;
`;

const PolicySpan = styled(StyledSpan)`
  font-weight: 100;
  font-size: 14px;
`;

const MetaDataSpan = styled(StyledSpan)`
  display: inline-block;
  vertical-align: middle;
`;

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <SuggestedItem key={r.id}>
      <Link to={`/rooms/${r.id}`} target='_blank'>
        <SuggestionCard>
          <ThumbnailImage
              src={r.unitImage}
              alt={`Image for ${r.unitName}`}
          />
          <Card.Content style={ {marginLeft: '0px', 'paddingLeft': '0px'} }>
            <Card.Header>
              <HeaderSpan>
                {r.room_type.toUpperCase()}
                <span> · </span>
                {r.beds < 2 ? `${r.beds} BED` : `${r.beds} BEDS`}
                <span> · </span>
                {r.city}, {r.state}
              </HeaderSpan>
              <br />
              <StyledSpan>{r.unitName}</StyledSpan>
              <br />
              <PolicySpan>
                {r.unitPrice.split('.')[0]} {r.priceModifier}
                {r.freeCancellation ? <span> · </span> : ''}
                {r.freeCancellation ? 'Free Cancellation' : ''}
              </PolicySpan>
            </Card.Header>
            <Card.Meta style={ {fontWeight: 'bold', fontColor: '#b2beb5'} }>
              <MetaDataSpan>
                <ReactStars
                  count={5} size={12} value={r.reviewScoresRating} color2={'#008489'} edit={false}
                />
              </MetaDataSpan>
              <span>
                {r.numberOfReviews}
                {r.isSuprhost ? <span> · </span> : ''}
                {r.isSuprhost ? 'Superhost' : ''}
              </span>
            </Card.Meta>
          </Card.Content>
        </SuggestionCard>
      </Link>
    </SuggestedItem>
  ))
  return <SuggestedList>{options}</SuggestedList>
};

export default Suggestions;