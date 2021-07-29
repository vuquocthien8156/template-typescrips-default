import React from 'react';
import {I18nManager} from 'react-native';
import AppCenter from 'appcenter';
import Crash, {UserConfirmation} from 'appcenter-crashes';
import {App} from '@resources';

import * as RNLocalize from 'react-native-localize';
import {translationGetters} from '@resources';
import {configTranslation} from '@helpers';
import {useSelector, useDispatch} from 'react-redux';
import {RootStoreState, setLanguage} from '@shared-state';

export const load = () => {
  Crash.notifyUserConfirmation(UserConfirmation.ALWAYS_SEND);
  AppCenter.getInstallId().then((installId) => {
    App.installID = installId;
  });
};

export const AppLogic = () => {
  const dispatch = useDispatch();
  const language = useSelector(
    (state: RootStoreState) => state.systems.language,
  );

  React.useEffect(() => {
    let _lang = language;
    if (_lang == '') {
      const fallback = {languageTag: 'en', isRTL: false};
      const {languageTag, isRTL} =
        RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
        fallback;
      I18nManager.forceRTL(isRTL);
      _lang = languageTag;
      dispatch(setLanguage(languageTag));
    }
    configTranslation(_lang);
  }, []);

  return {};
};
