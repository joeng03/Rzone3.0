import User from "../types/User";
import { PDPA_DECLARATION, TSHIRT_SIZES } from "config/constants";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Avatar } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { CardBody } from "@chakra-ui/react";
import { CardFooter } from "@chakra-ui/react";
import { CardHeader } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

type ProfileProps = {
  user: User;
};
const Profile = ({ user }: ProfileProps) => {
  const handleUpdateProfile = () => {
    if (!PDPAChecked) return;
    console.log("update profile");
  };

  const [phone, setPhone] = useState<string>(user.phone);
  const [email, setEmail] = useState<string>(user.email);
  const [majors, setMajors] = useState<string[]>(user.majors);
  const [year, setYear] = useState<number>(user.year);
  const [tshirtSize, setTshirtSize] = useState<string>(user.tshirtSize);
  const [dateOfBirth, setDateOfBirth] = useState<Date>(
    new Date(user.dateOfBirth)
  );
  const [PDPAChecked, setPDPAChecked] = useState<boolean>(false);

  return (
    <Center
      width="100vw"
      height="100vh"
      bgImage="linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"
    >
      <Card
        w="50%"
        maxW="xl"
        margin="0 auto"
        padding="1rem"
        borderRadius="1rem"
        bg="rgba(255,255,255,0.2)"
      >
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={user.name} src={user.profilePicture} />
              <Box>
                <Heading size="sm">{user.name}</Heading>
                <Text>{user.room}</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              // icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Grid
            h="15rem"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem>
              <Input
                placeholder="Phone number"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
                variant="unstyled"
                size="lg"
                bg="rgba(0,0,0,0.02)"
              />
            </GridItem>
            <GridItem>
              <Input
                placeholder="Email address"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                variant="unstyled"
                size="lg"
                bg="rgba(0,0,0,0.02)"
              />
            </GridItem>
            <GridItem>
              <Select>
                <option value="" selected>
                  T-shirt size
                </option>
                {TSHIRT_SIZES.map((size) => (
                  <option value={size}>{size}</option>
                ))}
              </Select>
            </GridItem>
            <GridItem>
              <DatePicker
                selected={dateOfBirth}
                onChange={(date: Date) => setDateOfBirth(date as Date)}
                className="calendar"
              />
            </GridItem>
          </Grid>
        </CardBody>

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Checkbox
            onChange={({ target }) => {
              setPDPAChecked(target.checked);
            }}
            float="left"
          >
            <a>PDPA Declaration</a>
          </Checkbox>

          <Button
            type="submit"
            onClick={handleUpdateProfile}
            disabled={!PDPAChecked}
            variant="ghost"
            float="right"
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default Profile;
