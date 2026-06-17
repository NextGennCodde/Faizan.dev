import { Link, Button, Heading, Stack, Text, Box, Flex } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function ContactMe({ contactMe }) {
  const isLargerThan800 = useMediaQuery(800)

  const handleClick = (event) => {
    ReactGA.event({ category: 'click', action: event })
  }

  return (
    <Box id="contact" w="100%">
      <Stack alignItems="center" justifyContent="center" w="100%" spacing={8}>

        <SlideUpWhenVisible>
          <Stack spacing={2} textAlign="center" maxW="600px">
            <Text
              fontSize="13px"
              fontWeight="600"
              color="#D78D83"
              letterSpacing="0.1em"
              textTransform="uppercase"
            >
              Get in touch
            </Text>
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="700"
              letterSpacing="-1px"
              color="#E7E7E8"
              lineHeight="1.15"
            >
              Let&apos;s build something{' '}
              <Box as="span" color="#D78D83" fontStyle="italic">
                remarkable.
              </Box>
            </Heading>
          </Stack>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Text color="#7A7370" fontSize="md" textAlign="center" maxW="480px" lineHeight="1.8">
            {contactMe && contactMe[0] && (
              <>
                {contactMe[0].fields.description}{' '}
                <Box as="span" color="#D78D83">
                  {contactMe[0].fields.highlightText}
                </Box>
              </>
            )}
            {!contactMe || !contactMe[0] && (
              <>
                Whether you have a project in mind, a question, or just want to say hi, I&apos;m always open to a conversation.
              </>
            )}
          </Text>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Flex wrap="wrap" gap="12px" justify="center">
            <Link
              href="http://linkedin.com/in/faizankhaliddev/"
              isExternal
              onClick={() => handleClick('contact_linkedin')}
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                leftIcon={<FaLinkedin color="#D78D83" />}
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              href="mailto:faizankhaliddev@gmail.com"
              isExternal
              onClick={() => handleClick('contact_email')}
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                leftIcon={<FaEnvelope color="#D78D83" />}
                size={isLargerThan800 ? 'md' : 'sm'}
                bg="transparent"
                border="1px solid #D78D83"
                color="#D78D83"
                _hover={{ bg: 'rgba(215,141,131,0.10)', color: '#E9E2D8' }}
              >
                Email me
              </Button>
            </Link>
            <Link
              href="https://github.com/NextGenCodde/"
              isExternal
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                leftIcon={<FaGithub color="#D78D83" />}
                onClick={() => handleClick('contact_github')}
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                GitHub
              </Button>
            </Link>
          </Flex>
        </SlideUpWhenVisible>

        {/* Footer signature */}
        {/* <SlideUpWhenVisible>
          <Text fontSize="13px" color="#7A7370" textAlign="center" pt={8}>
            Designed and built by Faizan Khalid. 2026
          </Text>
        </SlideUpWhenVisible> */}
      </Stack>
    </Box>
  )
}
