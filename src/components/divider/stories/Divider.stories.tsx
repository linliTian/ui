import * as React from 'react';
import styled from '@emotion/styled';
import { Modal } from '../../modal/Modal';
import { withKnobs, select } from '@storybook/addon-knobs';

// @ts-ignore
import mdx from './Divider.mdx';
import { Divider } from '../Divider';
import { Button } from '../../..';

const Parent = styled.div`
  padding: 20px;
  background: #f1f1f1;
`;

const Container = styled.div`
  max-width: 400px;
  display: flex;
`;

const ContainerText = styled.div`
  max-width: 600px;
  display: flex;
`;

const ContainerModal = styled.div`
  max-width: 600px;
  height: 200px;
`;

const Rect = styled.div`
  display: inline-block;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid darkgrey;
  margin: 1px;
  background-color: #fff;
`;

const Ulist = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const UlistHorizontal = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    height: 15px;
    display: inline-block;
    vertical-align: middle;
  }
`;

const ModalContent = styled.div`
  min-height: 50px;
`;

const Spacer = styled.div`
  height: 20px;
`;

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const horizontal = () => {
  return (
    <Parent>
      <Container>
        <Ulist>
          <li>item 1 item 1</li>
          <li>item 2</li>
          <Divider
            component="li"
            margin={select(
              'Margin',
              ['5px', '10px', '20px', '30px', '40px'],
              '20px',
              'Margin'
            )}
            thickness={select(
              'Thickness',
              ['1px', '2px', '3px', '4px'],
              '1px',
              'Thickness'
            )}
          />
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </Ulist>
      </Container>
    </Parent>
  );
};

export const vertical = () => {
  return (
    <Parent>
      <Container>
        <Rect>A</Rect>
        <Rect>B</Rect>
        <Rect>C</Rect>
        <Divider
          orientation="vertical"
          margin={select(
            'Margin',
            ['5px', '10px', '20px', '30px', '40px'],
            '20px',
            'Margin'
          )}
          thickness={select(
            'Thickness',
            ['1px', '2px', '3px', '4px'],
            '1px',
            'Thickness'
          )}
        />
        <Rect>D</Rect>
      </Container>

      <Spacer />

      <Container>
        <UlistHorizontal>
          <li>item 1</li>
          <li>Item 2</li>
          <Divider
            component="li"
            orientation="vertical"
            margin={select(
              'Margin',
              ['5px', '10px', '20px', '30px', '40px'],
              '20px',
              'Margin'
            )}
            thickness={select(
              'Thickness',
              ['1px', '2px', '3px', '4px'],
              '1px',
              'Thickness'
            )}
          />
          <li>Item 3</li>
        </UlistHorizontal>
      </Container>
    </Parent>
  );
};

const onCancel = () => {};
const onOk = () => {};

export const modal = () => {
  const [visible, setVisibility] = React.useState(false);

  const onCancel = React.useCallback(() => {
    setVisibility(false);
  }, []);

  const onOk = React.useCallback(() => {
    setVisibility(false);
  }, []);

  return (
    <Parent>
      <ContainerModal>
        <Button onClick={() => setVisibility(true)}>Open Modal</Button>
        <Modal
          title={'Title'}
          onCancel={onCancel}
          onOk={onOk}
          visible={visible}
        >
          <ModalContent>
            <div>Some content here</div>
            <Divider
              margin={select(
                'Margin',
                ['5px', '10px', '20px', '30px', '40px'],
                '5px',
                'Margin'
              )}
              thickness={select(
                'Thickness',
                ['1px', '2px', '3px', '4px'],
                '1px',
                'Thickness'
              )}
            />
            <div>More content here</div>
            <Divider
              margin={select(
                'Margin',
                ['5px', '10px', '20px', '30px', '40px'],
                '5px',
                'Margin'
              )}
              thickness={select(
                'Thickness',
                ['1px', '2px', '3px', '4px'],
                '1px',
                'Thickness'
              )}
            />
            <div>More content here</div>
          </ModalContent>
        </Modal>
      </ContainerModal>
    </Parent>
  );
};

export const text = () => {
  return (
    <Parent>
      <ContainerText>
        <Divider
          text="Some text"
          textAlign="left"
          thickness={select(
            'Thickness',
            ['1px', '2px', '3px', '4px'],
            '1px',
            'Thickness'
          )}
          bgColor="#f1f1f1"
          fontSize={select(
            'FontSize (rem)',
            [0.5, 0.8, 1, 1.1, 1.2, 1.3, 1.4, 2, 3, 4],
            1,
            'FontSize'
          )}
        />
      </ContainerText>

      <Spacer />

      <ContainerText>
        <Divider
          text="Some text"
          bgColor="#f1f1f1"
          thickness={select(
            'Thickness',
            ['1px', '2px', '3px', '4px'],
            '1px',
            'Thickness'
          )}
          fontSize={select(
            'FontSize (rem)',
            [0.5, 0.8, 1, 1.1, 1.2, 1.3, 1.4, 2, 3, 4],
            1,
            'FontSize'
          )}
        />
      </ContainerText>

      <Spacer />

      <ContainerText>
        <Divider
          text="Some text"
          textAlign="right"
          thickness={select(
            'Thickness',
            ['1px', '2px', '3px', '4px'],
            '1px',
            'Thickness'
          )}
          bgColor="#f1f1f1"
          fontSize={select(
            'FontSize (rem)',
            [0.5, 0.8, 1, 1.1, 1.2, 1.3, 1.4, 2, 3, 4],
            1,
            'FontSize'
          )}
          className="my-divider"
        />
      </ContainerText>
    </Parent>
  );
};

text.story = {
  decorators: [withKnobs],
};

modal.story = {
  decorators: [withKnobs],
};

horizontal.story = {
  decorators: [withKnobs],
};

vertical.story = {
  decorators: [withKnobs],
};
