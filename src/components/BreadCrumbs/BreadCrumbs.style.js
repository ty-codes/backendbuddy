import styled from 'styled-components';

export const BreadCrumbsWrapper = styled.nav.attrs(() => ({
  'aria-label': 'breadcrumbs',
}))`
  display: inline;

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;

    li {
      margin: 0;
      cursor: default;
      display: flex;
      align-items: center;

      &:last-of-type,
      a {
        text-decoration: none;
        font-family: Roboto;
        color: ${props => props.theme.greyText};
        font-size: 1rem;
        font-weight: 400;
      }

      a:hover {
        text-decoration: underline;
      }

      &:last-of-type {
        margin-right: 0;
        color: ${props => props.theme.primaryColor};
      }
    }

    .breadcrumb-separator {
      margin: 0 0.1428rem;
    }
  }
`;
