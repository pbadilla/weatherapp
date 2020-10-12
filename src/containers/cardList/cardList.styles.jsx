import styled from "styled-components";

export const CardListWrapper = styled.ul`
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadein 1s ease-in;

  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 200px;
`;

export const CardListItem = styled.li`
  list-style: none;
  margin-bottom: 5px;
`;

export const LinkCity = styled.a`
  color: var(--brownish-grey);
  cursor: pointer;
  height: 100%;
  width: 100%;
  text-decoration: none;
  span {
    text-decoration: none;
  }
`;
