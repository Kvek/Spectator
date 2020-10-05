import React from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { connect } from 'react-redux';
import { bookmarkAction } from 'redux/actions/bookmarkAction';

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 9;
  height: 100%;
  padding: 0 20px;
  max-width: calc(100% - 40px);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Author = styled.span`
  margin-bottom: 30px;
  min-width: 135px;
  min-height: 14px;
  width: 100%;
  height: auto;
  font-size: 20px;
  font-style: italic;
  color: #262222;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.app_default};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Title = styled.span`
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

const DeleteButton = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 1px solid ${(props) => props.theme.colors.app_default};
  font-size: 10px;
  color: ${(props) => props.theme.colors.app_default};
  background: rgba(211, 13, 29, 0.05);
  text-align: center;
  cursor: pointer;
`;

const BookmarkTile = ({ updateBookmark, bookmark, bookmarks }) => {
  const removeBookMark = () => {
    const currentBookmarkList = bookmarks?.filter(
      (currentBookmark) => currentBookmark?.title !== bookmark?.title
    );

    updateBookmark(currentBookmarkList);
  };

  return (
    <Container>
      <hr />
      {bookmark ? (
        <BookmarkTileContainer>
          <Content>
            <Header>
              <Author>
                {bookmark?.author ? bookmark?.author : 'The Spectator'}
              </Author>
              <DeleteButton onClick={removeBookMark}>X</DeleteButton>
            </Header>
            <Title>{bookmark?.title}</Title>
          </Content>
        </BookmarkTileContainer>
      ) : (
        <BookmarkTileContainer>
          <Content>
            <Header>
              <Skeleton
                height={25}
                width={125}
                style={{ marginBottom: '20px', borderRadius: '0px' }}
              />
              <Skeleton circle height={25} width={25} />
            </Header>
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
        </BookmarkTileContainer>
      )}
    </Container>
  );
};

const mapDispatchToProps = () => ({
  updateBookmark: (data) => bookmarkAction?.updateBookmark(data)
});

const mapStateToProps = (state) => ({
  bookmarks: state?.bookmark?.bookmarks
});

BookmarkTile.propTypes = {
  updateBookmark: PropTypes.func.isRequired,
  bookmark: PropTypes.object.isRequired,
  bookmarks: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkTile);
