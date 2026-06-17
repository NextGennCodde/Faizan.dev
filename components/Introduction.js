import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Flex,
  Tag,
  TagLabel,
} from '@chakra-ui/react'
import { FaEnvelope, FaFileAlt, FaLinkedin } from 'react-icons/fa'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga4'

export default function Introduction({ introduction }) {
  const isLargerThan800 = useMediaQuery(800)

  const handleClick = (event) => {
    ReactGA.event({ category: 'click', action: event })
  }

  const skills = [
    'Shopify OS 2.0',
    'CRO',
    'Liquid',
    'GSAP',
    'Javascript',
    'Python',
    'GraphQL',
  ]

  return (
    <Stack
      alignItems="flex-start"
      justifyContent="flex-start"
      w="100%"
      spacing={{ base: 8, md: 10 }}
    >
      {/* Eyebrow label */}
      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.5 } }}
        in={true}
      >
        <Box
          display="inline-flex"
          alignItems="center"
          gap="8px"
          px="14px"
          py="6px"
          bg="#1C1C1E"
          border="1px solid #2A2825"
          borderRadius="100px"
        >
          <Box
            w="7px"
            h="7px"
            borderRadius="50%"
            bg="#D78D83"
            sx={{ animation: 'pulse 2s ease infinite' }}
          />
          <Text
            fontSize="13px"
            fontWeight="500"
            color="#D78D83"
            letterSpacing="0.02em"
          >
            Available for remote work
          </Text>
        </Box>
      </SlideFade>

      {/* Name + Title */}
      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.65 } }}
        in={true}
      >
        <Stack spacing={3}>
          <Heading
            color="displayColor"
            fontSize="display"
            lineHeight="95%"
            letterSpacing={{ sm: '-2px', md: '-3px' }}
            fontWeight="700"
          >
            Faizan Khalid
          </Heading>
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="400"
            letterSpacing="-0.8px"
            lineHeight="1.2"
          >
            <Box as="span" color="displayColor" fontWeight="600">
              Shopify Developer
            </Box>{' '}
            who built{' '}
            <Box as="span" color="accent" fontStyle="italic" fontWeight="600">
              Khaby Lame&apos;s
            </Box>{' '}
            &nbsp;global storefront
          </Heading>
        </Stack>
      </SlideFade>

      {/* Body descriptor */}
      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        in={true}
      >
        <Text
          color="textSecondary"
          fontSize="display3"
          maxW="600px"
          lineHeight="1.7"
        >
          {introduction && introduction[0] && (
            <>
              {introduction[0].fields.emoji}{' '}
              {introduction[0].fields.description}
              <br />
            </>
          )}
          {introduction && introduction[1] && (
            <Flex
              as="span"
              display="inline-flex"
              gap="4px"
              alignItems="baseline"
              flexWrap="wrap"
            >
              <Box as="span">{introduction[1].fields.emoji}</Box>
              <Box as="span">
                {introduction[1].fields.description}{' '}
                {introduction[1].fields.companyUrl ? (
                  <Link
                    href={introduction[1].fields.companyUrl}
                    isExternal
                    onClick={() => handleClick('Introduction_companyUrl')}
                    rel="noreferrer"
                  >
                    {introduction[1].fields.company}
                  </Link>
                ) : (
                  <Box as="span" color="accent">
                    {introduction[1].fields.company}
                  </Box>
                )}
              </Box>
            </Flex>
          )}
        </Text>
      </SlideFade>

      {/* Skill pills */}
      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        in={true}
      >
        <Flex wrap="wrap" gap="8px">
          {skills.map((s) => (
            <Tag
              key={s}
              px="14px"
              py="6px"
              bg="#1C1C1E"
              border="1px solid #2A2825"
              borderRadius="6px"
              _hover={{ borderColor: '#D78D83' }}
              transition="border-color 0.2s"
            >
              <TagLabel color="textPrimary" fontSize="13px" fontWeight="500">
                {s}
              </TagLabel>
            </Tag>
          ))}
        </Flex>
      </SlideFade>

      {/* CTA buttons */}
      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        in={true}
      >
        <Flex wrap="wrap" gap="12px">
          <Link
            href="https://drive.google.com/file/d/1gp3QkfHMIYiHCgTX5Qs9gMy9bXCfCDVu/view?usp=sharing"
            isExternal
            onClick={() => handleClick('contact_resume')}
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              leftIcon={<FaFileAlt color="#D78D83" />}
              size={isLargerThan800 ? 'md' : 'sm'}
            >
              Resume
            </Button>
          </Link>
          <Link
            href="http://linkedin.com/in/faizan-khalid-dev/"
            isExternal
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              leftIcon={<FaLinkedin color="#D78D83" />}
              onClick={() => handleClick('introduction_linkedin')}
              size={isLargerThan800 ? 'md' : 'sm'}
            >
              LinkedIn
            </Button>
          </Link>
          <Link
            href="mailto:faizankhaliddev@gmail.com"
            isExternal
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              leftIcon={<FaEnvelope color="#D78D83" />}
              onClick={() => handleClick('introduction_email')}
              size={isLargerThan800 ? 'md' : 'sm'}
              bg="transparent"
              border="1px solid #D78D83"
              color="#D78D83"
              _hover={{ bg: 'rgba(215,141,131,0.10)', color: '#E9E2D8' }}
            >
              Email me
            </Button>
          </Link>
        </Flex>
      </SlideFade>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </Stack>
  )
}
