/* eslint-disable react/react-in-jsx-scope */
import { GlobalButton } from '../Button/Button';
import { Wrapper } from './NavigationStyles';

export const Navigation = () => {
  return (
    <Wrapper>
      <GlobalButton title='Technology' link='#technology' />
      <GlobalButton title='Project' link='#project' />
      <GlobalButton title='Contact' link='#contact' />
    </Wrapper>
  );
};
