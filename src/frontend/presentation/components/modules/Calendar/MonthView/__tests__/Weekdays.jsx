import React from 'react';
import { mount } from 'enzyme';

import Weekdays from '../Weekdays';

/* eslint-disable comma-dangle */

const weekdaysProps = {
    activeStartDate: new Date(2018, 0, 1),
};

describe('Weekdays', () => {
    it('renders proper weekdays (ISO 8601)', () => {
        const component = mount(
            <Weekdays {...weekdaysProps} calendarType="ISO 8601" />
        );

        const weekdays = component.find(
            '.react-calendar__month-view__weekdays__weekday'
        );
        const firstWeekday = weekdays.first();
        const firstWeekdayAbbr = firstWeekday.find('abbr');

        expect(weekdays).toHaveLength(7);
        expect(firstWeekday.text()).toBe('Mon');
        expect(firstWeekdayAbbr.prop('aria-label')).toBe('Monday');
    });

    it('renders proper weekdays (US)', () => {
        const component = mount(
            <Weekdays {...weekdaysProps} calendarType="US" />
        );

        const weekdays = component.find(
            '.react-calendar__month-view__weekdays__weekday'
        );
        const firstWeekday = weekdays.first();
        const firstWeekdayAbbr = firstWeekday.find('abbr');

        expect(weekdays).toHaveLength(7);
        expect(firstWeekday.text()).toBe('Sun');
        expect(firstWeekdayAbbr.prop('aria-label')).toBe('Sunday');
    });
});
