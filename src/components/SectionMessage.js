import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionMessage extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block text-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="inner">
                <div className="grid">
                  <header className="post-header">
                    {_.get(section, 'title', null) && (
                    <h1 className="post-title">{_.get(section, 'title', null)}</h1>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <div className="post-subtitle">{_.get(section, 'subtitle', null)}</div>
                    )}
                  </header>
                  <div className="post-content">
                    {markdownify(_.get(section, 'content', null))}
                  </div>
                  {_.get(section, 'actions', null) && (
                  <div className="block-buttons">
                    <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                  </div>
                  )}
                </div>
              </div>
            </section>
        );
    }
}
