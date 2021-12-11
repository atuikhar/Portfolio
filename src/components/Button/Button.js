import Link from 'next/link';
import { Button, Btn, SectionText } from './ButtonSyles';

export const GlobalButton = ({ title, link }) => {
  return (
    <div>
      <Link href={link}>
        <Button>
          <SectionText>{title}</SectionText>
        </Button>
      </Link>
    </div>
  );
};
