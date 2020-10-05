import React from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

import { bookmarkAction } from 'redux/actions/bookmarkAction';
import { connect } from 'react-redux';
import Link from 'next/link';

import styled from '@emotion/styled';
import BookmarkButton from '@components/BookmarkButton';

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
  height: 100%;
  padding: 20px 0 0;
  border-radius: 0;
  width: 100%;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 275px;
    max-width: 375px;
    max-height: 370px;
  }
`;

const Image = styled.div`
  width: 100%;
  min-height: 150px;
  max-height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});

  span {
    height: 100%;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 20px);
  flex: 1;

  span {
    height: 100%;
    width: 100%;
  }
`;

const TitleHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    text-decoration: none;
    color: #262222;
  }
`;

const TileAuthorTitle = styled.h1`
  min-width: 135px;
  min-height: 14px;
  width: 100%;
  height: auto;
  font-size: 20px;
  font-style: italic;
  font-weight: normal;
  color: #262222;
  margin: 0 0 20px 0;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.app_default};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TileHeader = styled.h3`
  font-family: goudy-old-style;
  margin: 0;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  font-size: 20px;
  width: 255px;
  height: 70px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  position: relative;
`;

const BookmarkCtaContainer = styled.div`
  display: block;
  width: 100%;

  button {
    margin: 20px 10px;
  }
`;

const Tile = ({ bookmark, updateBookmark, bookmarks, isBookmarked }) => {
  const addToBookmarks = () => {
    updateBookmark([...bookmarks, bookmark]);
  };

  return (
    <Container>
      {bookmark ? (
        <TileContainer>
          <Content>
            <TitleHeaderContainer>
              <TileAuthorTitle>
                {bookmark?.author ? bookmark?.author : 'The Spectator'}
              </TileAuthorTitle>

              <Link href={bookmark?.url}>
                <a target='_blank'>
                  <TileHeader>{bookmark?.title}</TileHeader>
                </a>
              </Link>
            </TitleHeaderContainer>
          </Content>

          <BookmarkCtaContainer>
            <BookmarkButton
              onButtonClick={addToBookmarks}
              isAdded={isBookmarked}
            />
          </BookmarkCtaContainer>

          <Image img={bookmark?.urlToImage} />
        </TileContainer>
      ) : (
        <TileContainer>
          <Content>
            <Skeleton
              height={25}
              width={125}
              style={{ marginBottom: '20px', borderRadius: '0px' }}
            />
            <Skeleton
              height={10}
              style={{ width: '100%', borderRadius: '0px' }}
            />
            <Skeleton
              height={10}
              style={{ width: '75%', borderRadius: '0px' }}
            />
            <Skeleton
              height={10}
              style={{ width: '50%', borderRadius: '0px' }}
            />
          </Content>
          <Image>
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
          </Image>
        </TileContainer>
      )}

      <hr />
    </Container>
  );
};

const mapDispatchToProps = () => ({
  updateBookmark: (data) => bookmarkAction?.updateBookmark(data)
});

const mapStateToProps = (state) => ({
  bookmarks: state?.bookmark?.bookmarks
});

Tile.propTypes = {
  updateBookmark: PropTypes.func.isRequired,
  bookmark: PropTypes.object.isRequired,
  bookmarks: PropTypes.array.isRequired,
  isBookmarked: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
