import * as React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

export default class App extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Container>
    );
  }
}

const Container = styled(View)`
  flex: 1;
  background-color: "#fff";
  align-items: "center";
  justify-content: "center";
`;
