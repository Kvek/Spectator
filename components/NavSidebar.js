import React, { useEffect, useRef } from 'react';
import { CloseIcon } from 'assets';
import { connect } from 'react-redux';
import { sidebarAction } from 'redux/actions/sidebarAction';

import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const NavContainer = styled.div`
  position: fixed;
  left: -100%;
  top: 0;
  bottom: 0;
  width: 100%;
  transition: left 0.2s linear;
  background: #fff;
  border-left: 1px solid rgba(38, 34, 34, 0.15);
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    max-width: 370px;
    left: -370px;
  }

  &.showSidebar {
    left: 0;
  }
`;

const NavInnerContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: auto;
`;

const NavTitle = styled.div`
  width: 100%;
  text-align: center;
  vertical-align: center;
`;

const NavHeader = styled.div`
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

const NavSidebar = ({ sidebarStatus, toggleNavSidebar }) => {
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
      <NavContainer className={sidebarStatus ? 'showSidebar' : null}>
        <NavInnerContainer>
          <NavHeader>
            <NavTitle>Navs</NavTitle>
            <CloseIcon width='25px' onClick={() => toggleNavSidebar(false)} />
          </NavHeader>
          <SideContainer />
        </NavInnerContainer>
      </NavContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarStatus: state?.sidebar?.showSidebar
});

const mapDispatchToProps = () => ({
  toggleNavSidebar: (status) => sidebarAction?.toggleSidebar(status)
});

NavSidebar.propTypes = {
  toggleNavSidebar: PropTypes.func.isRequired,
  sidebarStatus: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NavSidebar);
