import { TotalProps } from "../models";

export const Total = (props: TotalProps) => {
  const { total } = props;

  return (
    <p>Number of exercises {total}</p>
  )
};