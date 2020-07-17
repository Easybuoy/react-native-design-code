import React from "react";
import styled from "styled-components";
import { ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "./components/Card";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import { logoData, cardsData, coursesData } from "./data";
import Course from "./components/Course";
import Menu from "./components/Menu";

export default function App() {
  return (
    <Container>
      <Menu />
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome Back,</Title>
            <Name>Ezekiel</Name>

            <NotificationIcon
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 12,
              paddingLeft: 12,
              paddingTop: 30,
            }}
            style={{
              flexDirection: "row",
              // padding: 20,
              // paddingLeft: 12,
              // paddingTop: 30,
              // paddingRight: 20,
            }}
          >
            {logoData.map((logo) => (
              <Logo key={logo.text} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>Projects</Subtitle>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 20
            }}
            style={{ paddingBottom: 30 }}
          >
            {cardsData.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                image={card.image}
                caption={card.caption}
                logo={card.logo}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>

          <Subtitle>Articles</Subtitle>

          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
            {coursesData.map((course) => (
              <Course
                key={course.title}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;
