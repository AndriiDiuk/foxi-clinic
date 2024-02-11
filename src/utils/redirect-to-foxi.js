import {
  APP_STAGE_URL,
  APP_URL,
  WEB_SITE_STAGE_URL,
  WEB_SITE_URL,
} from 'constants';

/**
 *  Redirect to FOXI app
 * @returns {void}
 */
export const redirectToFoxiApp = () => {
  if (window.location.hostname === WEB_SITE_STAGE_URL) {
    return (window.location.href = APP_STAGE_URL);
  }
  if (window.location.hostname === WEB_SITE_URL) {
    return (window.location.href = APP_URL);
  }
  window.location.href = `${APP_URL}/login`;
};
