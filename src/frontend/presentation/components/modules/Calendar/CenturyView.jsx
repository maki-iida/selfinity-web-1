import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Decades from '@modules/Calendar/CenturyView/Decades';

import {
    isMaxDate,
    isMinDate,
    isValue,
} from '@modules/Calendar/shared/propTypes';

export default class CenturyView extends PureComponent {
    renderDecades() {
        return <Decades {...this.props} />;
    }

    render() {
        return (
            <div className="react-calendar__century-view">
                {this.renderDecades()}
            </div>
        );
    }
}

CenturyView.propTypes = {
    activeStartDate: PropTypes.instanceOf(Date).isRequired,
    locale: PropTypes.string,
    maxDate: isMaxDate,
    minDate: isMinDate,
    onChange: PropTypes.func,
    setActiveRange: PropTypes.func,
    value: isValue,
    valueType: PropTypes.string,
};
