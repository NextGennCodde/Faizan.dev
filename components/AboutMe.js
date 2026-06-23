import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Box,
  Flex,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Image,
} from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)

  const handleHover = (event) => {
    ReactGA.event({ category: 'hover', action: event })
  }

  const MoreInfo = ({ text, content }) => (
    <>
      {' '}
      {isLargerThan800 ? (
        <Popover isLazy placement="right" trigger="hover">
          <PopoverTrigger>
            <chakra.span
              color="accent"
              cursor="help"
              borderBottom="1px dashed"
              borderColor="accent"
              onMouseOver={() => handleHover(`about_${text}`)}
            >
              {text}
            </chakra.span>
          </PopoverTrigger>
          <PopoverContent
            color="white"
            bg="#1C1C1E"
            borderColor="#D78D83"
            borderRadius="8px"
            boxShadow="0 8px 32px rgba(0,0,0,0.4)"
          >
            <PopoverArrow bg="#D78D83" />
            <PopoverBody color="textPrimary" fontSize="sm" p={3}>
              {content}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <Text as="span" color="accent">{text}</Text>
      )}{' '}
    </>
  )

  // Stat cards
  const stats = [
    { value: '3+',  label: 'Years experience' },
    { value: '12+', label: 'Stores shipped' },
    { value: '90+', label: 'PageSpeed score' },
    { value: '20k', label: 'Images automated' },
  ]

  return (
    <Box id="about" w="100%">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
        {/* Text column */}
        <SlideUpWhenVisible>
          <Stack spacing={6}>
            <Stack spacing={1}>
              <Text fontSize="13px" fontWeight="600" color="accent" letterSpacing="0.1em" textTransform="uppercase">
                About me
              </Text>
              <Heading fontWeight="700" fontSize={{ base: 'xl', md: '2xl' }} color="displayColor" letterSpacing="-0.5px">
                Developer with an eye for design.
              </Heading>
            </Stack>

            <Text color="textSecondary" fontSize={{ base: '14px', md: '15px' }} lineHeight="1.8">
              Hey! I&apos;m Faizan Khalid, a passionate developer who loves both design and code.
              I started with computers early and evolved into a hands-on programmer focused on
              building modern, fast, and responsive Shopify storefronts.
              <br /><br />
              I like to build things using
              <MoreInfo
                content="Liquid, Shopify Admin & Storefront APIs, GraphQL, React, Next.js, Node.js, Tailwind, Python, REST, Git."
                text="my full stack"
              />
              shipping polished, production-ready storefronts and integrations.
              <br /><br />
              Currently I work as a
              <MoreInfo
                content="Custom Liquid, advanced AJAX Cart API, GSAP animations, Online Store 2.0 architecture."
                text="Shopify Theme Developer"
              />
              delivering
              <MoreInfo content="Conversion-focused, high-performance storefronts." text="high-impact themes" />
              and reliable
              <MoreInfo content="Shopify Admin & Storefront API, GraphQL, REST integrations." text="API integrations." />
              <br /><br />
              Available for remote roles. Open to full-time and contract.
            </Text>

            {/* Stat bar */}
            <SimpleGrid columns={2} spacing={4} pt={2}>
              {stats.map((s) => (
                <Box
                  key={s.label}
                  p={4}
                  bg="#1C1C1E"
                  border="1px solid #2A2825"
                  borderRadius="10px"
                  _hover={{ borderColor: '#D78D83' }}
                  transition="border-color 0.2s"
                >
                  <Text fontSize="28px" fontWeight="700" color="accent" lineHeight="1">
                    {s.value}
                  </Text>
                  <Text fontSize="13px" color="textSecondary" mt={1}>{s.label}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </SlideUpWhenVisible>

        {/* Photo column */}
        <SlideUpWhenVisible>
          <Flex align="center" justify="center" h="100%">
            <Box pos="relative" maxW={{ base: '280px', lg: '340px' }} w="100%">
              {/* Decorative accent ring */}
              <Box
                pos="absolute"
                top="-12px"
                right="-12px"
                w="100%"
                h="100%"
                border="1px solid"
                borderColor="accent"
                borderRadius="12px"
                opacity={0.35}
                zIndex='-1'
              />
              <Image
                w="100%"
                h={{ base: '280px', lg: '340px' }}
                objectFit="cover"
                objectPosition="top"
                borderRadius="10px"
                alt="Faizan Khalid"
                src="/personal.jpg"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </Box>
  )
}
