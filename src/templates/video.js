import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import components, {Layout} from '../components/index';
import {htmlToReact, withPrefix, markdownify} from '../utils';
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
//let domain = _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/');

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
                  {_.get(this.props, 'pageContext.frontmatter.image', null) && (
                  <div className="post-image">
                    <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))} alt={_.get(this.props, 'pageContext.frontmatter.image_alt', null)} />
                  </div>
                  )}
                  <div className="post-content">
                    {markdownify(_.get(this.props, 'pageContext.frontmatter.part1', null))}
                      <iframe width="560" height="315" src={_.get(this.props, 'pageContext.frontmatter.youtube', null)} title="Как заполнить документ данными из Excel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                  </div>
                  {_.map(_.get(this.props, 'pageContext.frontmatter.sections', null), (section, section_idx) => {
                      let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                      let Component = components[component];
                      return (
                        <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                      )
                  })}
                  <BlogPostFooter {...this.props} page={this.props.pageContext} date_type={'long'} />
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
