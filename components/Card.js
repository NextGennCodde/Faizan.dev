import {
  Center,
  Divider,
  Link,
  ScaleFade,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react'
import ReactGA from 'react-ga4'
import {
  FaCode, FaCss3Alt, FaExternalLinkAlt, FaJs, FaPython,
  FaReact, FaSass, FaShopify, FaServer, FaTint,
} from 'react-icons/fa'
import {
  SiGreensock, SiGraphql, SiNextdotjs, SiTailwindcss,
} from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'
import Image from 'next/image'

export default function Cards({ imageURL, title, slug, desc, tag, deployLink, imageHeight = '350px' }) {
  const getTag = (tag) => {
    const map = {
      'React':              ['#D78D83', FaReact],
      'Python':             ['#C4746A', FaPython],
      'Javascript':         ['#E9E2D8', FaJs],
      'JS':                 ['#E9E2D8', FaJs],
      'Sass':               ['#C4746A', FaSass],
      'Next.js':            ['#7A7370', SiNextdotjs],
      'CSS':                ['#7A7370', FaCss3Alt],
      'Vanilla CSS':        ['#7A7370', FaCss3Alt],
      'Tailwind CSS':       ['#D78D83', SiTailwindcss],
      'GSAP':               ['#D78D83', SiGreensock],
      'REST API':           ['#C4746A', FaServer],
      'API':                ['#C4746A', FaServer],
      'GraphQL':            ['#C4746A', SiGraphql],
      'Liquid':             ['#D78D83', FaTint],
      'Shopify (Liquid)':   ['#D78D83', FaTint],
      'Shopify':            ['#D78D83', FaShopify],
      'AJAX Cart API':      ['#C4746A', FaServer],
    }
    return map[tag] || ['#7A7370', FaCode]
  }

  const isLargerThan800 = useMediaQuery(800)

  const Tags = tag.map((item) => {
    const [color, Icon] = getTag(item)
    return (
      <Tag
        key={item}
        px="10px"
        py="4px"
        bg="#1C1C1E"
        border="1px solid #2A2825"
        borderRadius="6px"
        size="sm"
      >
        <TagLeftIcon as={Icon} color={color} mr="4px" />
        <TagLabel color="#C8C4BE" fontSize="12px" fontWeight="500">{item}</TagLabel>
      </Tag>
    )
  })

  const handleClick = (event) => {
    ReactGA.event({ category: 'click', action: event })
  }

  return (
    <Stack
      minH="320px"
      h="100%"
      bg="#1C1C1E"
      border="1px solid #2A2825"
      borderRadius="12px"
      overflow="hidden"
      transition="border-color 0.25s, transform 0.25s, box-shadow 0.25s"
      _hover={{
        borderColor: '#D78D83',
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 40px rgba(215,141,131,0.12)',
      }}
    >
      <Link
        href={deployLink}
        isExternal
        _hover={{ textDecoration: 'none' }}
        onClick={() => handleClick(`project_${title.replace('@', '-at')}`)}
      >
        <ScaleFade transition={{ duration: 0.8 }} in={true}>
          {/* Image: fixed-height container so all cards have identical image zones */}
          <Box w="100%" h={imageHeight} overflow="hidden" flexShrink={0}>
            <Image
              width={800}
              height={400}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
              alt={title}
              src={imageURL}
            />
          </Box>

          {/* Card body */}
          <Stack px={5} py={4} spacing={3}>
            <Flex align="center" justify="space-between">
              <Text
                color="#E7E7E8"
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="600"
                letterSpacing="-0.3px"
                lineHeight="1.3"
                noOfLines={2}
              >
                {title}
              </Text>
              <Box color="#D78D83" flexShrink={0} ml={2}>
                <FaExternalLinkAlt size={14} />
              </Box>
            </Flex>

            <Flex wrap="wrap" gap="6px">{Tags}</Flex>

            <Divider borderColor="#2A2825" />

            <Text color="#7A7370" fontSize="sm" lineHeight="1.7" noOfLines={3}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  )
}
