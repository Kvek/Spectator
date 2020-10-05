import React from 'react';
import PropTypes from 'prop-types';

import { Logo, BookMarkList } from 'assets';
import { connect } from 'react-redux';
import { sidebarAction } from 'redux/actions/sidebarAction';

import styled from '@emotion/styled';

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid rgba(38, 34, 34, 0.15);
  height: 80px;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding: 30px 0;
    height: 150px;
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

const BookMarkListContainer = styled.div`
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  padding: 0 10px;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    display: none;
  }
`;

const Banner = ({ toggleBookmarkSidebar }) => (
  <BannerContainer>
    <LogoContainer>
      <Logo width='150px' />
    </LogoContainer>
    <BookMarkListContainer>
      <BookMarkList width='30px' onClick={() => toggleBookmarkSidebar(true)} />
    </BookMarkListContainer>
  </BannerContainer>
);

Banner.propTypes = {
  toggleBookmarkSidebar: PropTypes.func.isRequired
};

const mapDispatchToProps = () => ({
  toggleBookmarkSidebar: (status) =>
    sidebarAction?.toggleBookmarkSidebar(status)
});

export default connect(null, mapDispatchToProps)(Banner);
