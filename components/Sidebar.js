import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SidebarContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  min-height: 100vh;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    max-width: 270px;
  }
`;

const Sidebar = ({ children }) => (
  <SidebarContainer>{children}</SidebarContainer>
);

Sidebar.propTypes = {
  children: PropTypes.node.isRequired
};

export default Sidebar;
