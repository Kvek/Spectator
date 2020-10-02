import React from 'react';
import Skeleton from 'react-loading-skeleton';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  hr {
    height: 0;
    width: calc(100% - 10px);
    margin: 10px;
    border: 0;
    border-bottom: 1px solid rgba(38, 34, 34, 0.15);
  }
`;

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  max-height: 350px;
  height: 100%;
  padding: 20px 0 0;
  border-radius: 0;
  max-width: 375px;
  width: 100%;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 275px;
  }
`;

const ImageSkeleton = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 9;
  width: 100%;
  padding: 0;

  span {
    height: 100%;
    width: 100%;
  }
`;

const ContentSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 20px);
  flex: 1;
  padding: 0 20px;

  span {
    height: 100%;
    width: 100%;
  }
`;

const Tile = () => (
  <Container>
    <TileContainer>
      <ContentSkeleton>
        <Skeleton
          height={25}
          width={125}
          style={{ marginBottom: '20px', borderRadius: '0px' }}
        />
        <Skeleton height={10} style={{ width: '100%', borderRadius: '0px' }} />
        <Skeleton height={10} style={{ width: '75%', borderRadius: '0px' }} />
        <Skeleton height={10} style={{ width: '50%', borderRadius: '0px' }} />
      </ContentSkeleton>
      <ImageSkeleton>
        <Skeleton
          width={125}
          height={35}
          style={{
            margin: '20px 10px',
            borderRadius: '24px'
          }}
        />

        <Skeleton
          style={{
            height: '100%',
            minHeight: '175px',
            borderRadius: '0'
          }}
        />
      </ImageSkeleton>
    </TileContainer>
    <hr />
  </Container>
);

export default Tile;
