import React from 'react';
import Skeleton from 'react-loading-skeleton';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;

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
