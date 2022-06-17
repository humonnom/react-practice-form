import { Component, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;
    if (error) {
      return fallback || <ErrorScreen error={error} />;
    }
    return children;
  }
}

function ErrorScreen({ error }: any) {
  return (
    <>
      <p>{error.message}</p>
    </>
  );
}
