# react-color-configuration-modal
> Color configuration modal.

## installation
```shell
"react-color-configuration-modal": "git+ssh://git@gitlab.finxos.com:tu-editor/react-color-configuration-modal.git#develop",
```

## commands
```shell
npm run dev
npm run build
```

## options

| property         | type     | description                          | default                                   |
| ---------------- | -------- | ------------------------------------ | ----------------------------------------- |
| visible          | Boolean  | Show/hide this dialog                | false                                     |
| modal            | Boolean  | Show/hide Modal                      | false                                     |
| title            | String   | Modal title                          | 颜色编辑器                                |
| value            | Array    | Current colors                       | []                                        |
| onChange         | Function | When value change                    | noop                                      |
| onVisibleChange  | Function | When visilbe change                  | noop                                      |
| colorCfgOptions  | Object   | Override color configuration options | see resources `react-color-configuration` |
| draggableOptions | Object   | Override react-draggable options     | see resources `react-draggable`           |

## usage
- import css

  ```scss
  @import "~react-color-configuration-modal/style.scss";

  // customize your styles:
  $react-color-configuration-modal-options: ()
  ```

- import js

  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactColorConfigurationModal from 'react-color-configuration-modal';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactColorConfigurationModal />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://github.com/afeiship/react-color-configuration
- https://github.com/mzabriskie/react-draggable
