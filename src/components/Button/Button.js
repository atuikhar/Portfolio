import Link from 'next/link';
import { Btn, SectionText } from './ButtonSyles';

export const GlobalButton = ({ title, link }) => {
  return (
    <div>
      <Link href={link}>
        <Btn>
          <SectionText>{title}</SectionText>
        </Btn>
      </Link>
    </div>
  );
};
