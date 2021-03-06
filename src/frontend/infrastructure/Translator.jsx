import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import ru from 'react-intl/locale-data/ru';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';
import ko from 'react-intl/locale-data/ko';
import zh from 'react-intl/locale-data/zh';
import pl from 'react-intl/locale-data/pl';
import ja from 'react-intl/locale-data/ja';
import { DEFAULT_LANGUAGE } from '@infrastructure/client_config';
import tt from 'counterpart';
import PropTypes from 'prop-types';

addLocaleData([
    /*...en, ...es, ...ru, ...fr, ...it, ...ko, ...zh, ...pl,*/ ...ja,
]);

// tt.registerTranslations('en', require('counterpart/locales/en'));
// tt.registerTranslations('en', require('@locales/en.json'));

// tt.registerTranslations('es', require('@locales/counterpart/es'));
// tt.registerTranslations('es', require('@locales/es.json'));

// tt.registerTranslations('ru', require('counterpart/locales/ru'));
// tt.registerTranslations('ru', require('@locales/ru.json'));

// tt.registerTranslations('fr', require('@locales/counterpart/fr'));
// tt.registerTranslations('fr', require('@locales/fr.json'));

// tt.registerTranslations('it', require('@locales/counterpart/it'));
// tt.registerTranslations('it', require('@locales/it.json'));

// tt.registerTranslations('ko', require('@locales/counterpart/ko'));
// tt.registerTranslations('ko', require('@locales/ko.json'));

// tt.registerTranslations('zh', require('@locales/counterpart/zh'));
// tt.registerTranslations('zh', require('@locales/zh.json'));

// tt.registerTranslations('pl', require('@locales/counterpart/pl'));
// tt.registerTranslations('pl', require('@locales/pl.json'));

tt.registerTranslations('ja', require('@locales/counterpart/ja'));
tt.registerTranslations('ja', require('@locales/ja.json'));

if (
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'staging'
) {
    tt.setFallbackLocale('ja');
}

// to ensure dynamic language change, "key" property with same "locale" info must be added
// see: https://github.com/yahoo/react-intl/wiki/Components#multiple-intl-contexts

class Translator extends React.Component {
    static propTypes = {
        locale: PropTypes.string,
    };

    static defaultProps = {
        locale: DEFAULT_LANGUAGE,
    };

    render() {
        const language = this.props.locale;
        tt.setLocale(language);
        return (
            <IntlProvider
                key={language}
                locale={language}
                defaultLocale={DEFAULT_LANGUAGE}
            >
                {this.props.children}
            </IntlProvider>
        );
    }
}

export default connect((state, ownProps) => {
    //FIXME: This is not adapt other languadges
    const locale = DEFAULT_LANGUAGE; //state.app.getIn(['user_preferences', 'locale']);
    return { ...ownProps, locale };
})(Translator);

export const FormattedHTMLMessage = ({ id, params, className }) => (
    <div
        className={'FormattedHTMLMessage' + (className ? ` ${className}` : '')}
        dangerouslySetInnerHTML={{ __html: tt(id, params) }}
    />
);
