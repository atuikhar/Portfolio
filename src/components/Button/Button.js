/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import { Button, SectionText } from './ButtonSyles';

// eslint-disable-next-line react/prop-types
export const GlobalButton = ({ title, link }) => {
  return (
    <div>
      <Link href={link} passHref>
        <Button>
          <SectionText>{title}</SectionText>
        </Button>
      </Link>
    </div>
  );
};
