import * as React from 'react';
import * as PropTypes from 'prop-types';
import  Helmet from 'react-helmet';


const PageDocumentHead = (props:any) => {
  return (
    <Helmet
      htmlAttributes={
        props.lang
      }
      title={props.title}
 
      meta={[
        {
          name: `description`,
          content: props.description,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: props.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: props.description,
        },
     
      ]
        .concat(
          props.keywords.length > 0
            ? {
                name: `keywords`,
                content: props.keywords.join(`, `),
              }
            : []
        )
        .concat(props.meta)}
    />
  );
};

PageDocumentHead.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

PageDocumentHead.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  // title: PropTypes.string.isRequired, TODO: this is the root of one error
};

export default PageDocumentHead;
