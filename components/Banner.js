import React from 'react';
import PropTypes from 'prop-types';

import { Logo, HamburgerIcon, BookMarkList, SearchIcon } from 'assets';
import { connect } from 'react-redux';
import { sidebarAction } from 'redux/actions/sidebarAction';

import styled from '@emotion/styled';

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  background: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding: 30px 0;
    position: relative;
  }
`;

const LogoContainer = styled.div`
  display: block;

  svg {
    width: 150px;

    @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
      width: 250px;
    }
  }
`;

const HamburgerContainer = styled.div`
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  padding: 10px;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    display: none;
  }
`;

const BookMarkListContainer = styled.div`
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  padding: 10px;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    display: none;
  }
`;

const NavLinkContainer = styled.div`
  display: none;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid rgba(38, 34, 34, 0.15);
  font-family: goudy-old-style, serif;
  font-weight: 400;
  margin-top: 20px;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    display: flex;
  }
`;

const LinkContainer = styled.ol`
  margin: 20px auto;
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

const LinkItem = styled.li`
  position: relative;
  height: 30px;
  display: inline-flex;
  padding: 0 15px;
  font-size: 24px;
  cursor: pointer;
  align-items: flex-end;

  &:hover {
    color: ${(props) => props.theme.colors.app_default};
  }

  &:not(:nth-last-child(1)) {
    &::after {
      border-right: 1px solid rgba(38, 34, 34, 0.15);
      z-index: -1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform: skewX(-20deg);
    }
  }
`;

const Banner = ({ toggleSidebar, toggleBookmarkSidebar }) => (
  <BannerContainer>
    <>
      <HamburgerContainer>
        <HamburgerIcon width='23px' onClick={() => toggleSidebar(true)} />
      </HamburgerContainer>
      <LogoContainer>
        <Logo width='150px' />
      </LogoContainer>
      <BookMarkListContainer>
        <BookMarkList
          width='30px'
          onClick={() => toggleBookmarkSidebar(true)}
        />
      </BookMarkListContainer>
    </>
    <NavLinkContainer>
      <LinkContainer>
        <LinkItem>News</LinkItem>
        <LinkItem>Bookmarks</LinkItem>
        <LinkItem>
          <SearchIcon width='23px' height='30px' />
        </LinkItem>
      </LinkContainer>
    </NavLinkContainer>
  </BannerContainer>
);

Banner.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  toggleBookmarkSidebar: PropTypes.func.isRequired
};

const mapDispatchToProps = () => ({
  toggleSidebar: (status) => sidebarAction?.toggleSidebar(status),
  toggleBookmarkSidebar: (status) =>
    sidebarAction?.toggleBookmarkSidebar(status)
});

export default connect(null, mapDispatchToProps)(Banner);
