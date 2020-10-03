import React from 'react';
import Skeleton from 'react-loading-skeleton';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: auto;
  }

  hr {
    height: 0;
    width: calc(100% - 20px);
    margin: 5px 10px;
    border: 0;
    border-bottom: 1px solid rgba(38, 34, 34, 0.15);
  }
`;

const BookmarkTileContainer = styled.div`
  display: flex;
  margin: 10px;
  height: 150px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 4px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
`;

const TitleSkeleton = styled.div`
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-top: 5px;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    display: none;
  }
`;

const ContentSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 9;
  height: 100%;
  padding: 0 20px;
`;

const HeaderSkeleton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BookmarkTile = () => (
  <Container>
    <BookmarkTileContainer>
      <TitleSkeleton>
        <Skeleton
          height={100}
          width={150}
          style={{
            marginBottom: '20px',
            borderRadius: '0px',
            width: '100%',
            height: '100%'
          }}
        />
      </TitleSkeleton>
      <ContentSkeleton>
        <HeaderSkeleton>
          <Skeleton
            height={25}
            width={125}
            style={{ marginBottom: '20px', borderRadius: '0px' }}
          />
          <Skeleton circle height={25} width={25} />
        </HeaderSkeleton>
        <Skeleton height={10} style={{ width: '100%', borderRadius: '0px' }} />
        <Skeleton height={10} style={{ width: '75%', borderRadius: '0px' }} />
        <Skeleton height={10} style={{ width: '50%', borderRadius: '0px' }} />
      </ContentSkeleton>
    </BookmarkTileContainer>
    <hr />
  </Container>
);

export default BookmarkTile;
