import { ContentProps } from "../models";

export const Content = (props: ContentProps) => {
  const { parts, exercises } = props;

  return exercises.map((ex, idx) => (
    <p>
      {parts[idx]} {ex}
    </p>
  ));
};

