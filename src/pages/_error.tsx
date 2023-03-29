import { NextPage, NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
  message: string;
  cause?: unknown;
}

export const Error: NextPage<ErrorProps> = ({ statusCode, message }) => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <h1 className="text-xl font-bold text-light">
        {statusCode
          ? `${statusCode} | ${message}`
          : 'An error occurred on client'}
      </h1>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = err ? err.name : 'An error occurred on client';
  return { statusCode, message };
};

export default Error;
