import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix} from '../utils';
import BlogPostFooter from '../components/BlogPostFooter';

import {Helmet} from 'react-helmet';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Post extends React.Component {
    render() {
        return (
          <Layout {...this.props} imgpath='testpath'>
          <Helmet>
          <meta property="og:image" content={"https://" + _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/') + withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))}/>  
          <meta property="og:type" content="article"/>
          <meta property="og:title" content={_.get(this.props, 'pageContext.frontmatter.title', null) + " : " + _.get(this.props, 'pageContext.frontmatter.subtitle', null)}/>
          <meta property="og:url" content={"https://" + _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/') + withPrefix(_.get(this.props, 'pageContext.url', null))}/>
          <meta property="og:description" content={_.get(this.props, 'pageContext.frontmatter.meta_description', null)}/>
          </Helmet>
            <div className="outer">
              <div className="inner-medium">
                <article className="post post-full">
                  <header className="post-header">
                    <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}
                    </div>
                    )}
                  </header>
                  <div className="post-content">
                  <iframe src="https://script.google.com/macros/s/AKfycbzsnUZiI1SJkboBabKvvvEs1XmvLR1U8mp7IFPH2lN1YQJN0sYKDMMlVpFD5Uea4BCEvQ/exec" 
width="100%" height="700" frameborder="0" seamless></iframe>
                  </div>
                  <BlogPostFooter {...this.props} page={this.props.pageContext} date_type={'long'} />
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
