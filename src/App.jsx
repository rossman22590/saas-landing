import React from 'react'
import {
  ChakraProvider,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Flex,
  Text,
  Badge,
  Box,
  Tag,
  Heading,
  Image
} from '@chakra-ui/react'
import { EmailIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const App = () => (
  <ChakraProvider resetCSS>
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mt={4}
    >
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Text fontSize="3xl" fontWeight="bold">
          ⚡️Welcome to TSI AI Studio
        </Text>
        <Badge variant="subtle" colorScheme="pink" ml={1}>
          BETA
        </Badge>
      </Flex>
      <Text color="blackAlpha.900">
        The First AI Studio Open Source and SAAS
      </Text>
    </Flex>
    <Grid p={10} gap={6} templateColumns="repeat(auto-fit, minmax(350px, 1fr))">
      <Stack>
        <Box
          backgroundColor="white"
          boxShadow="sm"
          borderRadius="lg"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            pb={2}
          >
            <ChevronLeftIcon />
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
            >
              Docs
            </Heading>
          </Flex>
          <Stack ml={4} spacing={2} mt={4} mr={4}>
            <Stack
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Tag
                size="md"
                variant="subtle"
                colorScheme="whatsapp"
                borderRadius="sm"
                fontSize="sm"
              >
                AI for your comapny!
              </Tag>
              <Text fontSize="md" color="gray.600">
                Drag any component from the left hand panel into this editor.
                Then start interacting with them: try to drop the Avatar
                component in this box…
              </Text>
              <Box
                width="200px"
                display="block"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                backgroundColor="gray.100"
                borderRadius="lg"
                p={3}
                minHeight="60px"
              >
                <Image height="100px" width="100px" />
              </Box>
            </Stack>
            <Stack spacing={2}>
              <Tag size="md" variant="subtle" colorScheme="whatsapp">
                GPT API
              </Tag>
              <Text color="gray.600">
                A preset is a group of components (like Alert). Just drop a
                preset to easily setup a complexe component like this:
              </Text>
            </Stack>
            <Alert variant="left-accent" status="warning">
              <AlertIcon />
              <AlertTitle mr={1}>Alert!</AlertTitle>
              <AlertDescription>
                You must have an Open AI API key!
              </AlertDescription>
            </Alert>
          </Stack>
        </Box>
      </Stack>
      <Box>
        <Box
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="sm"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
            >
              What You Need
            </Heading>
            <ChevronRightIcon ml="90px" />
          </Flex>
          <Stack spacing={4} ml={4} mt={4}>
            <Stack spacing={2}>
              <Tag size="md" variant="subtle" colorScheme="yellow">
                Update Stripe +Login{' '}
              </Tag>
              <Text fontSize="md" color="gray.600">
                On the right hand side, you can find the inspectror panel. You
                will find the tools to edit the component's props and style.
              </Text>
            </Stack>
            <Stack spacing={2}>
              <Tag size="md" variant="subtle" colorScheme="yellow">
                Mongo DB
              </Tag>
              <Text color="gray.600">
                Reach the yellow bar on the top to delete, reset and access the
                Chakra doc of each component.
              </Text>
            </Stack>
            <Stack spacing={2}>
              <Tag size="md" variant="subtle" colorScheme="yellow">
                Deployment of Digital Ocean and Railway
              </Tag>
              <Text color="gray.600">
                By clicking on a component containing children, you will see a
                Children panel appearing on the right. It enables sorting the
                children.{' '}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box>
        <Box
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="sm"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            mb={2}
            pl={4}
          >
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
            >
              Pricing
            </Heading>
          </Flex>
          <Stack spacing={5} pl={4} pt={4}>
            <Stack spacing={2}>
              <Tag size="md" variant="solid" colorScheme="facebook">
                SAAS mode
              </Tag>
              <Text color="gray.600">
                The Builder mode adds extra padding/border to ease components
                selection (like containers).
              </Text>
            </Stack>
            <Stack>
              <Tag size="md" variant="solid" colorScheme="facebook">
                Node JS Panel
              </Tag>
              <Text color="gray.600">
                Toggle the code panel for viewing the JSX/React code of your
                components. You can even export your code directly to
                CodeSandbox!
              </Text>
            </Stack>
            <Stack spacing={4}>
              <Tag size="md" variant="solid" colorScheme="facebook">
                Tailwind + React
              </Tag>
              <Stack isInline>
                <Tag size="sm" variant="subtle">
                  React
                </Tag>
                <Tag size="sm" variant="subtle" colorScheme="gray">
                  Mongo
                </Tag>
                <Text color="gray.600">Frontend</Text>
              </Stack>
              <Stack isInline>
                <Tag size="sm" variant="subtle" colorScheme="gray">
                  Express
                </Tag>
                <Tag size="sm" variant="subtle" colorScheme="gray">
                  Node
                </Tag>
                <Text color="gray.600">Backend</Text>
              </Stack>
              <Stack isInline>
                <Tag size="md" variant="subtle" colorScheme="gray">
                  npm install
                </Tag>
                <Text color="gray.600">Install Application</Text>
              </Stack>
              <Stack isInline>
                <Tag size="sm" variant="subtle" colorScheme="gray">
                  npm start
                </Tag>
                <Text color="gray.600">Start SAAS application</Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box>
        <Box
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="sm"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            mb={2}
            pl={4}
          >
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
            >
              Get a demo
            </Heading>
          </Flex>
          <Stack spacing={5} pl={4} pt={4}>
            <Stack spacing={2}>
              <Tag size="md" variant="solid" colorScheme="facebook">
                Personalized Dmeo
              </Tag>
              <Text color="gray.600">
                The Builder mode adds extra padding/border to ease components
                selection (like containers).
              </Text>
            </Stack>
            <Stack>
              <Tag size="md" variant="solid" colorScheme="facebook">
                One TIme Payment
              </Tag>
              <Text color="gray.600">
                Toggle the code panel for viewing the JSX/React code of your
                components. You can even export your code directly to
                CodeSandbox!
              </Text>
            </Stack>
            <Stack spacing={4}>
              <Tag size="md" variant="solid" colorScheme="facebook">
                One Click Deploy
              </Tag>
              <Stack isInline>
                <Tag size="sm" variant="subtle">
                  cmd+z
                </Tag>
                <Tag size="sm" variant="subtle" colorScheme="gray">
                  ctrl+z
                </Tag>
                <Text color="gray.600">Undo</Text>
              </Stack>
              <Stack isInline>
                <Tag size="sm" variant="subtle" colorScheme="gray">
                  cmd+y
                </Tag>
                <Tag size="sm" variant="subtle" colorScheme="gray">
                  ctrl+y
                </Tag>
                <Text color="gray.600">Redo</Text>
              </Stack>
              <Stack isInline>
                <Tag size="md" variant="subtle" colorScheme="gray">
                  b
                </Tag>
                <Text color="gray.600">Toggle Builder mode</Text>
              </Stack>
              <Stack isInline>
                <Tag size="sm" variant="subtle" colorScheme="gray">
                  c
                </Tag>
                <Text color="gray.600">Toggle Code panel</Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Grid>
  </ChakraProvider>
)

export default App
