import React from 'react';
import PropTypes from 'prop-types';
import string from '../lang';
import './emailactions.scss';

const EmailActions = props => {
  return (
    <div className="email-more-menu">
      <ul>
        <li
          onClick={ev => {
            props.onReplyEmail(ev);
            props.onToggleMenu(ev);
          }}
        >
          <span>{string.mailbox.reply}</span>
        </li>
        <li
          onClick={ev => {
            props.onReplyAll(ev);
            props.onToggleMenu(ev);
          }}
        >
          <span>{string.mailbox.reply_all}</span>
        </li>
        <li
          onClick={ev => {
            props.onForward(ev);
            props.onToggleMenu(ev);
          }}
        >
          <span>{string.mailbox.forward}</span>
        </li>
        {props.isSpam || props.isTrash ? (
          <li
            onClick={ev => {
              props.onDeletePermanently(ev);
              props.onToggleMenu(ev);
            }}
          >
            <span>{string.mailbox.delete_permanently}</span>
          </li>
        ) : (
          <li
            onClick={ev => {
              props.onDelete(ev);
              props.onToggleMenu(ev);
            }}
          >
            <span>{string.mailbox.delete}</span>
          </li>
        )}

        <li
          onClick={ev => {
            props.onMarkUnread(ev);
            props.onToggleMenu(ev);
          }}
        >
          <span>{string.mailbox.mark_as_unread}</span>
        </li>
        {!props.isSpam && (
          <li
            onClick={ev => {
              props.onMarkAsSpam(ev);
              props.onToggleMenu(ev);
            }}
          >
            <span>{string.mailbox.mark_as_spam}</span>
          </li>
        )}
        {props.showLightsOn && (
          <li
            onClick={ev => {
              props.onLightsOn(ev);
              props.onToggleMenu(ev);
            }}
          >
            <span>
              {props.lightsOn
                ? string.mailbox.lights_off
                : string.mailbox.lights_on}
            </span>
          </li>
        )}
        <li
          onClick={ev => {
            props.onPrintEmail(ev);
            props.onToggleMenu(ev);
          }}
        >
          <span>{string.mailbox.print_email}</span>
        </li>
        {props.hasBoundary && (
          <li
            onClick={ev => {
              props.onOpenEmailSource(ev);
              props.onToggleMenu(ev);
            }}
          >
            <span>{string.mailbox.email_source}</span>
          </li>
        )}
        {!props.isFromMe &&
          !props.isSpam && (
            <li
              onClick={ev => {
                props.onReportPhishing(ev);
                props.onToggleMenu(ev);
              }}
            >
              <span>{string.mailbox.report_as_phishing}</span>
            </li>
          )}
      </ul>
    </div>
  );
};

EmailActions.propTypes = {
  isFromMe: PropTypes.bool,
  isSpam: PropTypes.bool,
  isTrash: PropTypes.bool,
  hasBoundary: PropTypes.bool,
  lightsOn: PropTypes.bool,
  onDelete: PropTypes.func,
  onDeletePermanently: PropTypes.func,
  onForward: PropTypes.func,
  onMarkAsSpam: PropTypes.func,
  onMarkUnread: PropTypes.func,
  onOpenEmailSource: PropTypes.func,
  onPrintEmail: PropTypes.func,
  onReplyAll: PropTypes.func,
  onReplyEmail: PropTypes.func,
  onReportPhishing: PropTypes.func,
  onToggleMenu: PropTypes.func,
  onLightsOn: PropTypes.func,
  showLightsOn: PropTypes.bool
};

export default EmailActions;
