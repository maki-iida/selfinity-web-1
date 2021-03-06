import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Months from '@modules/Calendar/YearView/Months';

import {
    isMaxDate,
    isMinDate,
    isValue,
} from '@modules/Calendar/shared/propTypes';

export default class YearView extends PureComponent {
    renderMonths() {
        return <Months {...this.props} />;
    }

    render() {
        return (
            <div className="react-calendar__year-view">
                {this.renderMonths()}
            </div>
        );
    }
}

YearView.propTypes = {
    activeStartDate: PropTypes.instanceOf(Date).isRequired,
    formatMonth: PropTypes.func,
    locale: PropTypes.string,
    maxDate: isMaxDate,
    minDate: isMinDate,
    onChange: PropTypes.func,
    setActiveRange: PropTypes.func,
    value: isValue,
    valueType: PropTypes.string,
};
