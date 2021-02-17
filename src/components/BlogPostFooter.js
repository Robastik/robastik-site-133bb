import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {getData} from '../utils';

export default class BlogPostFooter extends React.Component {
    render() {
        let post = _.get(this.props, 'page', null);
        let date_type = _.get(this.props, 'date_type', null);
        return (
            ''
        );
    }
}
