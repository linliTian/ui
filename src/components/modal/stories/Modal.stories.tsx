import * as React from 'react';
import styled from '@emotion/styled';

import { Button } from '../../button/Button';

import { Input } from '../../input/Input';

// @ts-ignore
import mdx from './Modal.mdx';

import { Modal } from '../Modal';

const ModalContent = styled.div`
  min-height: 200px;
`;

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  const [visible, setVisibility] = React.useState(false);

  const onCancel = React.useCallback(() => {
    setVisibility(false);
  }, []);

  const onOk = React.useCallback(() => {
    setVisibility(false);
  }, []);

  return (
    <div>
      <Button onClick={() => setVisibility(true)}>Open Simple Modal</Button>
      <Modal title={'Title'} onOk={onOk} onCancel={onCancel} visible={visible}>
        <ModalContent>
          <Input label={'First Name'} />
          <Input label={'Last Name'} />
          <Input label={'Email'} />
          <Input label={'Password'} />
        </ModalContent>
      </Modal>
    </div>
  );
};

export const customFooter = () => {
  const [visible, setVisibility] = React.useState(false);

  const onCancel = React.useCallback(() => {
    setVisibility(false);
  }, []);

  const onOk = React.useCallback(() => {
    setVisibility(false);
  }, []);

  return (
    <div>
      <Button onClick={() => setVisibility(true)}>
        Open Custom Footer Modal
      </Button>
      <Modal
        title={'Title'}
        onOk={onOk}
        onCancel={onCancel}
        footer={
          <React.Fragment>
            <Button onClick={onCancel} ghost>
              Cancel
            </Button>
            <div style={{ height: '1px', width: '16px' }} />
            <Button onClick={onOk}>Finish</Button>
          </React.Fragment>
        }
        visible={visible}
      >
        <ModalContent>
          <Input label={'First Name'} />
          <Input label={'Last Name'} />
          <Input label={'Email'} />
          <Input label={'Password'} />
        </ModalContent>
      </Modal>
    </div>
  );
};

export const asyncClose = () => {
  const [visible, setVisibility] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onCancel = React.useCallback(() => {
    setVisibility(false);
  }, []);

  const onOk = React.useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      setVisibility(false);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Button onClick={() => setVisibility(true)}>
        Open Modal with Async Logic
      </Button>
      <Modal
        title={'Title'}
        onOk={onOk}
        onCancel={onCancel}
        closable={!loading}
        allowKeyboard={!loading}
        cancelButtonProps={{
          disabled: loading,
        }}
        okButtonProps={{
          loading,
        }}
        visible={visible}
      >
        <ModalContent>
          <Input label={'First Name'} />
          <Input label={'Last Name'} />
          <Input label={'Email'} />
          <Input label={'Password'} />
        </ModalContent>
      </Modal>
    </div>
  );
};
