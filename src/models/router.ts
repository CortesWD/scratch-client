export interface RouterElement {
  path: string;
  // component: Component<any> | JSX.Element | React.FC<any>;
  component: React.ElementType;
  routeClassName?: string;
  withPaper?: boolean;
}