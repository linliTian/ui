import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface PortalProps {
  /** Content to show in the Portal */
  children?: React.ReactNode;

  /** Portal node to mount against */
  container?: () => HTMLElement | null;

  /** Disables Portal behaviour and returns node to the parent DOM hierarchy */
  disablePortal?: boolean;
}

export const Portal: React.FunctionComponent<PortalProps> = (props) => {
  const { children, container, disablePortal } = props;

  const [mountNode, setMountNode] = React.useState<HTMLElement | null>(null);

  const getContainer = React.useCallback(() => {
    if (container) {
      return container();
    }
  }, [container]);

  React.useEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer() || document.body);
    }
  }, [getContainer, disablePortal]);

  if (disablePortal) {
    React.Children.only(children);
    return React.cloneElement(children as React.ReactElement);
  }

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
};

Portal.displayName = 'Portal';

Portal.defaultProps = {
  children: '',
  disablePortal: false,
};
