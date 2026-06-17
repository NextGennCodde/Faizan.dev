import React, { useRef } from 'react'
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import useMediaQuery from '../hook/useMediaQuery'

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()

  const NavLinks = [
    { label: 'Work', href: '/projects' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ]

  const NavbarDrawer = () => (
    <Drawer
      initialFocusRef={firstField}
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
    >
      <DrawerOverlay bg="rgba(20,20,20,0.85)" backdropFilter="blur(8px)" />
      <DrawerContent bg="#1C1C1E" borderLeft="1px solid #2A2825">
        <DrawerCloseButton color="#C8C4BE" />
        <DrawerHeader borderBottomWidth="1px" borderColor="#2A2825">
          <Text
            fontSize="xl"
            fontWeight="700"
            letterSpacing="-0.5px"
            color="#E7E7E8"
          >
            FK
            <Box as="span" color="#D78D83" ml="2px">
              .
            </Box>
          </Text>
        </DrawerHeader>
        <DrawerBody>
          <Stack spacing="8px" pt={4}>
            {NavLinks.map((link) => (
              <NextLink key={link.label} passHref href={link.href}>
                <Button
                  as="a"
                  w="100%"
                  justifyContent="flex-start"
                  variant="ghost"
                  fontSize="16px"
                  onClick={onClose}
                >
                  {link.label}
                </Button>
              </NextLink>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )

  return (
    <Box pos="sticky" top={0} zIndex={99}>
      <Slide
        direction="top"
        transition={
          enableTransition
            ? { enter: { duration: 0.4, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        in={true}
        reverse
      >
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          w={{ base: '100%', lg: '100%' }}
          mx="auto"
          px={{ base: '20px', md: '54px' }}
          py="14px"
          bg="rgba(20,20,20,0.92)"
          backdropFilter="blur(12px)"
          borderBottom="1px solid #2A2825"
        >
          {/* Wordmark */}
          <NextLink passHref href="/">
            <Text
              fontSize="22px"
              fontWeight="700"
              letterSpacing="-0.5px"
              color="#E7E7E8"
              cursor="pointer"
              _hover={{ color: '#E9E2D8' }}
            >
              <Box as="span" color="#D78D83" ml="1px">
                {'{'}
              </Box>
             &nbsp;F&nbsp;
              <Box as="span" color="#D78D83" ml="1px">
                {'}'}
              </Box>  
            </Text>
          </NextLink>

          {/* Desktop nav */}
          {isLargerThan768 ? (
            <Flex gap="4px" align="center">
              {NavLinks.map((link) => (
                <NextLink key={link.label} passHref href={link.href}>
                  <Button
                    as="a"
                    variant="ghost"
                    fontSize="14px"
                    px="16px"
                    py="8px"
                  >
                    {link.label}
                  </Button>
                </NextLink>
              ))}
              <NextLink passHref href="mailto:faizankhaliddev@gmail.com">
                <Button
                  as="a"
                  ml="8px"
                  fontSize="14px"
                  px="20px"
                  py="8px"
                  bg="transparent"
                  border="1px solid #D78D83"
                  color="#D78D83"
                  _hover={{ bg: 'rgba(215,141,131,0.10)', color: '#E9E2D8' }}
                >
                  Hire me
                </Button>
              </NextLink>
            </Flex>
          ) : (
            <Button variant="ghost" onClick={onOpen} p="2" color="#C8C4BE">
              <Box
                w="18px"
                h="14px"
                display="flex"
                flexDir="column"
                justifyContent="space-between"
              >
                <Box h="1.5px" bg="currentColor" borderRadius="1px" />
                <Box h="1.5px" bg="currentColor" borderRadius="1px" w="70%" />
                <Box h="1.5px" bg="currentColor" borderRadius="1px" />
              </Box>
            </Button>
          )}
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
  )
}
