import { Text, Avatar, Card, Button, Link } from "@nextui-org/react";
import { Box } from "../../styles/box";
import { Flex } from "../../styles/flex";
import { GithubIcon } from "../../icons/github-icon";
import { LinkedinIcon } from "../../icons/linkedin-icon";
import { SectionAnimation } from "../../animations/section";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { LinkIcon } from "../../icons/link-icon";
import { GridContainer } from "../../styles/grid";

export const Home = () => {
  const router = useRouter();

  return (
    <Box css={{ px: "$12", "@xsMax": { px: "$10" }, width: "100%" }}>
      {/* <Card variant="flat" css={{ marginBottom: "$10" }}>
        <Card.Body css={{ backgroundColor: "$accents2" }}>
          <Text css={{ fontFamily: "inherit", textAlign: "center" }} as={"p"}>
            Hello, I&apos;m Nghia Tran. I&apos;m a computer science student based in
            Nantes, France!
          </Text>
        </Card.Body>
      </Card> */}
      <Flex justify={"between"} css={{ pb: "$10" }}>
        <Box css={{ alignSelf: "center" }}>
          <Text h2 css={{ my: "$0" }}>
            Nghia Tran
          </Text>
          <Text css={{ fontFamily: "inherit" }}>
            Future Bachelor in Computer Science at IUT de Nantes
          </Text>
        </Box>

        <Avatar
          css={{ "--nextui--avatarXl": "7.5rem" }}
          pointer
          bordered
          size={"xl"}
          src=""
        />
      </Flex>
      <SectionAnimation delay={0.1}>
        <Box css={{ mb: "$10" }}>
          <Text h3>About me</Text>
          <Text
            span
            css={{
              textIndent: "0em",
              display: "block",
            }}
          >Aspiring first year Bachelor at Nantes Université. Currently, I'm specialized in general Computer Science.
           I'm looking forward to pursuit a Master in Data Science and eventually a career in Computer Science.
          </Text>

          <Flex justify={"center"} css={{ mt: "$8" }}>
            <NextLink href="/projects">
              <Link block css={{ gap: "$4" }}>
                Projects <LinkIcon />
              </Link>
            </NextLink>
          </Flex>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.2}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Bio</Text>

          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2005
              </Text>
              <Text span>Born in Hanoi, Vietnam.</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2016 - 2020
              </Text>
              <Text span>Secondary Education in United States.</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2020 - 2023
              </Text>
              <Text span>Baccaleaureat General in France.</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2023 - Present
              </Text>
              <Text span>Bachelor in Computer Science at the IUT de Nantes.</Text>
            </Box>
             {/* <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                  2021 - Present
              </Text>
              <Text span>Middle Software Engineer At Jinza</Text>
            </Box>
              <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                  2023 - Present
              </Text>
              <Text span>Software Engineer At Trades.org</Text>
            </Box> */}
          </Box>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>I ❤️ </Text>
          <Text as={"span"} css={{ textIndent: "1em" }}>
            I love to learn new things, I am passionate about technology and I
            always try to learn something new every day, I love to solve
            problems and I am always looking for new challenges.
          </Text>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Skills</Text>
          <GridContainer
            as={"ul"}
            gap={"md"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(4, 1fr)",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}
          >
            <Box as={"li"}>ReactJS</Box>
            <Box as={"li"}>NextJS</Box>
             <Box as={"li"}>Graphql</Box>
              <Box as={"li"}>React Native</Box>
            <Box as={"li"}>NodeJS</Box>
            <Box as={"li"}>NestJS</Box>
            <Box as={"li"}>TypeScript</Box>
            <Box as={"li"}>C# / .NET Core</Box>
            <Box as={"li"}>Git</Box>
            <Box as={"li"}>Git</Box>
            <Box as={"li"}>SQL</Box>
            <Box as={"li"}>Windows/Linux</Box>
            <Box as={"li"}>C++</Box>
          </GridContainer>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Languages</Text>
          <GridContainer as={"ul"} gap={"md"} css={{ m: 0, px: 0 }}>
            <Box as={"li"}>English </Box>
            <Box as={"li"}>French </Box>
            <Box as={"li"}>Vietnamese </Box>
            <Box as={"li"}>Spanish </Box>
          </GridContainer>
        </Box>
      </SectionAnimation>

      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>On the Web </Text>
          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://github.com/h1eutran"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<GithubIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  @h1eutran
                </Button>
              </Link>
            </Box>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://www.linkedin.com/in/hieunghiatran/"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<LinkedinIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  @Nghia Tran
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>
    </Box>
  );
};
