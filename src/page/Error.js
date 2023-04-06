import React from "react";
import { Button, Result, Layout } from "antd";

export default function ErrorPage() {
  return (
    <Layout.Content>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" href="/">
            Back Home
          </Button>
        }
      />
    </Layout.Content>
  );
}
