"use client";

type Props = {
  data: any;
};

const ConsoleLogClient = (props: Props) => {
  console.log(props.data);
  return <></>;
};

export default ConsoleLogClient;
