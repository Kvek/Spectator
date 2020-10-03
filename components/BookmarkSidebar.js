import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import { CloseIcon } from 'assets';
import { connect } from 'react-redux';
import { sidebarAction } from 'redux/actions/sidebarAction';

import styled from '@emotion/styled';

const BookmarkContainer = styled.div`
  position: fixed;
  right: -100%;
  top: 0;
  bottom: 0;
  width: 100%;
  transition: right 0.25s ease-in;
  background: #fff;
  border-left: 1px solid rgba(38, 34, 34, 0.15);
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    max-width: 370px;
    right: -370px;
  }

  &.showSidebar {
    right: 0;
  }
`;

const BookMarkInnerContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: auto;
`;

const BookmarkTitle = styled.div`
  width: 100%;
  text-align: center;
  vertical-align: center;
`;

const BookmarkHeader = styled.div`
  display: flex;
  position: sticky;
  background: #fff;
  top: 0;
  left: 0;
  padding: 25px 0;
  width: 100%;
  border-bottom: 1px solid rgba(38, 34, 34, 0.15);

  svg {
    cursor: pointer;
    margin: 5px 11px 0 0;
    fill: '#000';
  }
`;

const SideContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const SidebarShadow = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.35);
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  z-index: 1;
`;

const BookmarkSidebar = ({ sidebarStatus, toggleBookmarkSidebar }) => {
  const body = useRef(null);

  useEffect(() => {
    body.current = document.getElementsByTagName('body')?.[0];
  }, []);

  useEffect(() => {
    body.current.style.overflowY = sidebarStatus ? 'hidden' : 'auto';
  }, [sidebarStatus]);

  return (
    <>
      {sidebarStatus ? <SidebarShadow /> : null}
      <BookmarkContainer className={sidebarStatus ? 'showSidebar' : null}>
        <BookMarkInnerContainer>
          <BookmarkHeader>
            <BookmarkTitle>BookMarks</BookmarkTitle>
            <CloseIcon
              width='25px'
              onClick={() => toggleBookmarkSidebar(false)}
            />
          </BookmarkHeader>
          <SideContainer />
        </BookMarkInnerContainer>
      </BookmarkContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarStatus: state?.sidebar?.showBookmarkSidebar
});

const mapDispatchToProps = () => ({
  toggleBookmarkSidebar: (status) =>
    sidebarAction?.toggleBookmarkSidebar(status)
});

BookmarkSidebar.propTypes = {
  toggleBookmarkSidebar: PropTypes.func.isRequired,
  sidebarStatus: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkSidebar);
