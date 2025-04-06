import { gql } from '@apollo/client';

const PAGES_QUERY = gql`
    query GetPages {
      entries {
        ... on page_Entry {
          id
          title
          slug
        }
      }
    }
    `;
  export default PAGES_QUERY;
