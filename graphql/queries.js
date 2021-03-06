import { gql } from "apollo-boost";

const CARDSQUERY = gql`
  {
    cardsCollection {
      items {
        title
        caption
        subtitle
        content
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
`;

export { CARDSQUERY };
