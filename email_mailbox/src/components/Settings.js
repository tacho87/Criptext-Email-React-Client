import React from 'react';
import PropTypes from 'prop-types';
import SettingAccountWrapper from './SettingAccountWrapper';
import SettingLabelsWrapper from './SettingLabelsWrapper';
import SettingDevicesWrapper from './SettingDevicesWrapper';
import SettingGeneral from './SettingGeneral';
import SettingUpgradePlusWrapper from './SettingUpgradePlusWrapper';
import { version } from './../../package.json';
import string from '../lang';
import { isPlus, isEnterprise } from '../utils/plus';

const Sections = [
  string.settings.account,
  string.settings.general,
  string.sidebar.labels,
  string.settings.trusted_devices,
  string.settings.upgrade_plus
];

export const TAB = {
  ACCOUNT: Sections[0],
  GENERAL: Sections[1],
  LABELS: Sections[2],
  DEVICES: Sections[3],
  PLUS: Sections[4]
};

const Settings = props => (
  <div className="settings-content">
    <ul className="settings-content-items">
      {Sections.reduce((result, section, index) => {
        if (section === TAB.PLUS && isEnterprise(props.customerType))
          return result;
        return [
          ...result,
          <Items
            key={index}
            name={section}
            sectionName={
              section === TAB.PLUS && isPlus(props.customerType)
                ? string.settings.billing
                : section
            }
            onClick={props.onClickSection}
            selected={section === props.sectionSelected}
          />
        ];
      }, [])}
    </ul>
    <div className="settings-content-scroll cptx-scrollbar">
      {renderSection(props)}
    </div>
    {renderFooter(props)}
  </div>
);

const Items = props => (
  <li
    className={'section-item' + (props.selected ? ' selected' : '')}
    onClick={() => props.onClick(props.name)}
  >
    <span>{props.sectionName}</span>
  </li>
);

const renderSection = props => {
  const section = props.sectionSelected;
  switch (section) {
    case Sections[0]:
      return <SettingAccountWrapper {...props} />;
    case Sections[1]:
      return <SettingGeneral {...props} />;
    case Sections[2]:
      return <SettingLabelsWrapper {...props} />;
    case Sections[3]:
      return <SettingDevicesWrapper {...props} />;
    case Sections[4]:
      return <SettingUpgradePlusWrapper {...props} />;
    default:
      break;
  }
};

const renderFooter = ({
  isFromStore,
  onClickCheckForUpdates,
  onClickLogout
}) => (
  <div className="settings-footer">
    <div className="settings-footer-version-info">
      <div className="settings-footer-version">
        <span>Criptext Version: {version}</span>
      </div>
      {!isFromStore && (
        <div
          className="settings-footer-check-for-updates"
          onClick={() => onClickCheckForUpdates()}
        >
          <span>{string.settings.check_for_updates}</span>
        </div>
      )}
    </div>
    <div className="settings-footer-logout">
      <hr />
      <div className="logout-label" onClick={() => onClickLogout()}>
        <i className="icon-log-out" />
        <span>{string.settings.logout}</span>
      </div>
    </div>
  </div>
);

Items.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  sectionName: PropTypes.string,
  selected: PropTypes.bool
};

Settings.propTypes = {
  customerType: PropTypes.number,
  onClickSection: PropTypes.func,
  sectionSelected: PropTypes.string
};

renderFooter.propTypes = {
  onClickCheckForUpdates: PropTypes.func,
  onClickLogout: PropTypes.func,
  isFromStore: PropTypes.bool
};

export default Settings;
