import React from 'react';

import { CloseIcon } from 'assets';
import { connect } from 'react-redux';
import { sidebarAction } from 'redux/actions/sidebarAction';

import styled from '@emotion/styled';

import Sidebar from '@components/Sidebar';

const BookmarContainer = styled.div`
  position: fixed;
  right: -100%;
  top: 0;
  bottom: 0;
  width: 100%;
  transition: right 0.25s ease-in;
  z-index: 3;
  background: #fff;
  border-left: 1px solid rgba(38, 34, 34, 0.15);

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    max-width: 370px;
    right: -370px;
  }

  &.showSidebar {
    right: 0;
  }
`;

const BookmarkTitle = styled.div`
  width: 100%;
  text-align: center;
  vertical-align: center;
`;

const BookmarkHeader = styled.div`
  display: flex;
  padding: 25px 0;
  width: 100%;
  border-bottom: 1px solid rgba(38, 34, 34, 0.15);

  svg {
    cursor: pointer;
    margin: 5px 11px 0 0;
    fill: '#000';
  }
`;

const BookmarkSidebar = ({ sidebarStatus, toggleBookmarkSidebar }) => (
  <BookmarContainer className={sidebarStatus ? 'showSidebar' : null}>
    <BookmarkHeader>
      <BookmarkTitle>BookMarks</BookmarkTitle>
      <CloseIcon width='25px' onClick={() => toggleBookmarkSidebar(false)} />
    </BookmarkHeader>
    <Sidebar>
      <div />
    </Sidebar>
  </BookmarContainer>
);

const mapStateToProps = (state) => ({
  sidebarStatus: state?.sidebar?.showBookmarkSidebar
});

const mapDispatchToProps = () => ({
  toggleBookmarkSidebar: (status) =>
    sidebarAction?.toggleBookmarkSidebar(status)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkSidebar);
