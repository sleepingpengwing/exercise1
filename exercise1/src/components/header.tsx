import { HeaderProps } from "../models";

export const Header = (props: HeaderProps) => {
  const { course } = props;

  return (
    <h1>{ course }</h1>
  )
};