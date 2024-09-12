import React from "react";

export interface ContentProps extends React.AllHTMLAttributes<HTMLElement> {
  parts: string[];
  exercises: number[];
}