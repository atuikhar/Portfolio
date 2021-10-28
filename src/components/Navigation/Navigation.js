import { GlobalButton } from '../Button/Button';
import { Wrapper } from './NavigationStyles';

export const Navigation = (props) => {
  return (
    <Wrapper>
      <GlobalButton title='Technology' link='#technology' />
      <GlobalButton title='Project' link='#project' />
      <GlobalButton title='Contact' link='#contact' />
    </Wrapper>
  );
};
