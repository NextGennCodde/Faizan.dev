import {
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
  Link,
} from '@chakra-ui/layout'
import NextLink from 'next/link'
import Cards from './Card'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function FeaturedProjects({ projects }) {
  const handleClick = (event) => {
    ReactGA.event({ category: 'click', action: event })
  }

  return (
    <Box id="work" w="100%">
      <Stack spacing={12} w="full">
        {/* Section header */}
        <SlideUpWhenVisible threshold={0.1}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'flex-start', md: 'flex-end' }}
            justify="space-between"
            gap={4}
          >
            <Stack spacing={1}>
              <Text
                fontSize="13px"
                fontWeight="600"
                color="#D78D83"
                letterSpacing="0.1em"
                textTransform="uppercase"
              >
                Selected work
              </Text>
              <Heading
                color="#E7E7E8"
                fontWeight="700"
                fontSize={{ base: 'xl', md: '2xl' }}
                letterSpacing="-0.5px"
              >
                Client projects I&apos;ve shipped.
              </Heading>
              <Text color="#7A7370" fontSize={{ base: 'sm', md: 'md' }}>
                Real stores. Real traffic. Real results.
              </Text>
            </Stack>
            <NextLink passHref href="/projects">
              <Link
                onClick={() => handleClick('featuredprojects_explore more')}
                fontSize={{ base: 'sm', md: 'md' }}
                color="#D78D83"
                _hover={{ color: '#E9E2D8' }}
                transition="color 0.2s"
                whiteSpace="nowrap"
              >
                All projects &rarr;
              </Link>
            </NextLink>
          </Flex>
        </SlideUpWhenVisible>

        {/* Project grid - equal height cards via fixed image zone */}
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6} alignItems="stretch">
          <SlideUpWhenVisible>
            {projects && projects[0] && (
              <Cards
                slug={projects[0].fields.slug}
                desc={projects[0].fields.description}
                imageURL={projects[0].fields.imageUrl}
                tag={projects[0].fields.tags}
                title={projects[0].fields.title}
                deployLink={projects[0].fields.deployLink}
              />
            )}
          </SlideUpWhenVisible>

          <SlideUpWhenVisible>
            {projects && projects[1] && (
              <Cards
                slug={projects[1].fields.slug}
                desc={projects[1].fields.description}
                imageURL={projects[1].fields.imageUrl}
                tag={projects[1].fields.tags}
                title={projects[1].fields.title}
                deployLink={projects[1].fields.deployLink}
              />
            )}
          </SlideUpWhenVisible>

          <SlideUpWhenVisible threshold={0.6}>
            {projects && projects[2] && (
              <Cards
                slug={projects[2].fields.slug}
                desc={projects[2].fields.description}
                imageURL={projects[2].fields.imageUrl}
                tag={projects[2].fields.tags}
                title={projects[2].fields.title}
                deployLink={projects[2].fields.deployLink}
              />
            )}
          </SlideUpWhenVisible>

          <SlideUpWhenVisible>
            {projects && projects[3] && (
              <Cards
                slug={projects[3].fields.slug}
                desc={projects[3].fields.description}
                imageURL={projects[3].fields.imageUrl}
                tag={projects[3].fields.tags}
                title={projects[3].fields.title}
                deployLink={projects[3].fields.deployLink}
              />
            )}
          </SlideUpWhenVisible>
        </SimpleGrid>
      </Stack>
    </Box>
  )
}
