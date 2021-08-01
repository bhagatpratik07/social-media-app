import React from "react";

import { Post } from "../Post";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Post",
  component: Post,
};

const Template = () => <Post content="A new Post!" date="3/3/21" />;

export const Default = Template.bind({});
