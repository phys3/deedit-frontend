import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


const PageDocumentHead = ({ description, lang, meta, keywords, title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
 
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
     
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
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
  title: PropTypes.string.isRequired,
};

export default PageDocumentHead;
