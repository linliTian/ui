import styled from '@emotion/styled';

export { Button } from '../../..';

export const Parent = styled.div`
  padding: 20px;
  background: #f1f1f1;
`;

export const Container = styled.div`
  max-width: 400px;
  display: flex;
`;

export const ContainerText = styled.div`
  max-width: 600px;
  display: flex;
`;

export const ContainerModal = styled.div`
  max-width: 600px;
  height: 200px;
`;

export const Rect = styled.div`
  display: inline-block;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid darkgrey;
  margin: 1px;
  background-color: #fff;
`;

export const Ulist = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const UlistHorizontal = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    height: 25px;
    display: inline-block;
    vertical-align: middle;
  }
`;

export const ModalContent = styled.div`
  min-height: 50px;
`;

export const Spacer = styled.div`
  height: 20px;
`;
