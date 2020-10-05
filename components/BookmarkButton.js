import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const BookmarkButtonContainer = styled.button`
  border-radius: 24px;
  min-width: 125px;
  min-height: 35px;
  width: 125px;
  height: 35px;
  text-align: center;
  text-transform: uppercase;
  background: ${(props) =>
    props.isAdded ? 'rgba(38, 34, 34, 0.05)' : 'rgba(211, 13, 29, 0.05)'};
  border: 1px solid
    ${(props) =>
      props.isAdded
        ? 'rgba(38, 34, 34, 0.15)'
        : props.theme.colors.app_default};
  color: ${(props) =>
    props.isAdded ? 'rgba(38, 34, 34, 0.4)' : props.theme.colors.app_default};
  cursor: ${(props) => (props.isAdded ? 'default' : 'pointer')};

  span {
    margin: 0 5px;
  }
`;

const Tick = styled.span`
  color: ${(props) => props.theme.colors.button_background};
`;

const BookmarkButton = ({ isAdded, onButtonClick }) => {
  const [isBookmarkAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(isAdded);
  }, [isAdded]);

  return (
    <BookmarkButtonContainer
      isAdded={isBookmarkAdded}
      disabled={isBookmarkAdded}
      onClick={onButtonClick}
    >
      {isBookmarkAdded ? 'Added' : 'Add'}
      {isBookmarkAdded ? <Tick>&#10003;</Tick> : <span>&#9734;</span>}
    </BookmarkButtonContainer>
  );
};

BookmarkButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  isAdded: PropTypes.bool
};

BookmarkButton.defaultProps = {
  isAdded: false
};

export default BookmarkButton;
