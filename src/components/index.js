import React from 'react';
import ReactDOM from 'react-dom';
import ReactColorConfiguration from 'react-color-configuration';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

const CLASS_NAME = 'react-color-configuration-modal';
const MSG = {
  DUPLICATE: '选色重复',
  LT_MIN: '至少保留1个颜色',
  GT_MAX: '最多可以自定义8个颜色'
};

// api:
// @https://github.com/afeiship/react-color-configuration

export default class extends React.Component {
  static propTypes = {
    value: PropTypes.array,
    onChange: PropTypes.func,
    onVisibleChange: PropTypes.func,
    onModalClick: PropTypes.func,
    visible: PropTypes.bool,
    modal: PropTypes.bool,
    title: PropTypes.string,
    colorCfgOptions: PropTypes.object,
    draggableOptions: PropTypes.object
  };

  static defaultProps = {
    value: [],
    onVisibleChange: nx.noop,
    onModalClick: nx.noop,
    onChange: nx.noop,
    visible: false,
    modal: false,
    title: '颜色编辑器',
    draggableOptions: {
      defaultPosition: {
        x: -192.5,
        y: -275
      }
    }
  };

  constructor(inProps) {
    super(inProps);
    const { visible, value } = inProps;
    this._event = null;
    this.state = {
      toastVisible: false,
      validateMsg: '',
      value,
      visible
    };
  }

  componentWillReceiveProps(inNextProps) {
    const { visible, value } = inNextProps;
    if (visible !== this.state.visible) {
      this.visibleChange(visible);
    }
  }

  change(inEvent) {
    const { value, multiple } = inEvent.target;
    const { onChange } = this.props;
    this._event = inEvent;
    if (multiple) {
      this.setState({ value }, () => {
        onChange(inEvent);
      });
    } else {
      onChange(inEvent);
    }
  }

  visibleChange(inValue) {
    const { onVisibleChange } = this.props;
    this.setState({ visible: inValue }, () => {
      onVisibleChange({ target: { value: inValue } });
    });
  }

  _onChange = (inEvent) => {
    const { action } = inEvent.target;
    this.change(inEvent);
    if (action === 'confirm') {
      this.visibleChange(false);
    }
  };

  _onModalClick = (e) => {
    const { onModalClick } = this.props;
    onModalClick();
  };

  _onClose = (e) => {
    const { colorCfgOptions } = this.props;
    const target = this._event
      ? this._event.target
      : {
          value: [],
          dirty: colorCfgOptions.current,
          multiple: false
        };
    this.visibleChange(false);
    target.action = 'dismiss';
    this.change({ target });
  };

  _onValidate = (inEvent) => {
    const { value } = inEvent.target;
    const validateMsg = MSG[value];
    this.setState({ toastVisible: true, validateMsg });
    setTimeout(() => {
      this.setState({ toastVisible: false });
    }, 2000);
  };

  _onPropagation = (inEvent) => {
    inEvent.stopPropagation();
  };

  render() {
    const { title, modal, colorCfgOptions, draggableOptions } = this.props;
    const { toastVisible, value, visible, validateMsg } = this.state;

    if (visible) {
      return (
        <Draggable
          onStart={this._onPropagation}
          handle={`.${CLASS_NAME}--hd`}
          {...draggableOptions}>
          <section
            onMouseDown={this._onPropagation}
            onMouseMove={this._onPropagation}
            onMouseUp={this._onPropagation}
            className={CLASS_NAME}>
            <header className={`${CLASS_NAME}--hd`}>
              <span>{title}</span>
              <span onClick={this._onClose}>
                <img
                  draggable="false"
                  width="24"
                  src={require('assets/images/icon-close.png')}
                />
              </span>
            </header>
            <div className={`${CLASS_NAME}--bd`}>
              <ReactColorConfiguration
                value={value}
                onValidate={this._onValidate}
                onChange={this._onChange}
                {...colorCfgOptions}
              />
            </div>
            <div hidden={!toastVisible} className={`${CLASS_NAME}__toast`}>
              {validateMsg}
            </div>

            {ReactDOM.createPortal(
              <div
                hidden={!modal}
                onClick={this._onModalClick}
                className={`${CLASS_NAME}__overlay`}
              />,
              document.body
            )}
          </section>
        </Draggable>
      );
    }
    return null;
  }
}
