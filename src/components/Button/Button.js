import Link from 'next/link';
import { Btn, SectionText } from './ButtonSyles';

export const GlobalButton = ({ title, link }) => {
  return (
    <div>
      <Btn>
        <Link href={link}>
          <SectionText>{title}</SectionText>
        </Link>
      </Btn>
    </div>
  );
};
