import Link from "next/link";

interface LinkButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
}

export const LinkButton = (props: LinkButton) => {
  const { href, children, ...other } = props;

  return (
    <Link href={href}>
      <button {...other}>{children}</button>
    </Link>
  );
};
