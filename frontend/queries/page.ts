
import { gql } from '@apollo/client';

const PAGE_QUERY = gql`
 query getPage($slug: [String]!)  {
  entry(slug: $slug) {
    ... on page_Entry {
      id
      slug
      title
      pageContentGrid {
        ... on hero_Entry {
          typeHandle
          enabled
          uid
          text
          title
          image {
            uid
            url
          }
        }
      }
    }
  }
}
`;
  export default PAGE_QUERY;