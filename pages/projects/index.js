import { useState } from 'react'
import {
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Divider,
  Button,
  Box,
} from '@chakra-ui/react'

import Cards from '../../components/Card'
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'

export default function Projects({ projects }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Container>
        <Head>
          <title>Faizan Khalid - Frontend Developer</title>
          <meta content="Faizan Khalid - Frontend Developer" name="title" />
          <meta
            content="Passionate frontend developer based in Pakistan, crafting digital experiences with modern web technologies"
            name="description"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Faizan Khalid" />

          <meta content="website" property="og:type" />
          <meta content="faizankhalid.vercel.app/projects" property="og:url" />
          <meta
            content="Faizan Khalid - Frontend Developer"
            property="og:title"
          />
          <meta
            content="Passionate frontend developer based in Pakistan, crafting digital experiences with modern web technologies."
            property="og:description"
          />
        
        </Head>
        <Stack
          justifyContent="center"
          my={{ base: '10vh', md: '16vh' }}
          spacing={{ base: 6, md: 10 }}
        >
          <Stack spacing={{ base: 4, md: 5 }}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '3xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              I love building projects and practice my engineering skills,
              here's an archive of things that I've worked on.
            </Text>
            <InputGroup maxW={{ base: '100%', md: '400px' }}>
              <InputRightElement pointerEvents="none">
                <FaSearch />
              </InputRightElement>
              <Input
                placeholder="Search projects"
                type="text"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
            {projects
              .filter((e) =>
                e.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project) => (
                <Cards
                  key={project.title}
                  desc={project.frontmatter.summary}
                  imageURL={project.frontmatter.image}
                  tag={project.frontmatter.techStack
                    .split(',')
                    .map((e) => e.trim())}
                  title={project.title}
                  slug={project.frontmatter.slug}
                  deployLink={project.frontmatter.deployLink}
                />
              ))}
          </SimpleGrid>
          {/* <Box textAlign="center" py={10}>
            <Button
              as="a"
              href="https://nextgencodde.github.io/Projects/"
              target="_blank"
              colorScheme="transparent"
              color="white"
              _hover={{
                bg: '#3ccf91',
              }}
            >
              More Projects
            </Button>
          </Box> */}
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // Sample projects data
  const projects = {
    edges: [
      {
        post: {
          title: "Bilal Marth (BM7) — Custom Store Redesign",
          frontmatter: {
            slug: "bilal-marth",
            summary: "Developed a custom Shopify storefront redesign for prominent creator Bilal Marth, aligning styling, layout, and color schemas with the brand's luxurious identity. Engineered an interactive, zero-app AJAX gift-box builder within the cart drawer, handling multiple product additions, removals, and price calculations dynamically.",
            image: "/Bilal-marth.png",
            techStack: "Shopify (Liquid), AJAX Cart API, Javascript",
            date: "2026-05-10",
            deployLink: "https://bilalmarth7.pk"
          }
        }
      },
      {
        post: {
          title: "Hands Down Coffee — Shopify Store (Khaby Lame Brand)",
          frontmatter: {
            slug: "hands-down-coffee",
            summary: "Engineered a fully bespoke Shopify 2.0 storefront from the ground up, designed to easily handle global viral traffic spikes from creator Khaby Lame. Crafted high-fidelity custom GSAP scroll-triggered animations and modular UI grids to deliver a premium, conversion-optimized storefront.",
            image: "/hands-down-coffee.png",
            techStack: "Shopify (Liquid), GSAP, Javascript",
            date: "2026-04-15",
            deployLink: "https://handsdowncoffee.com/"
          }
        }
      },
      {
        post: {
          title: "Utopia Streetwear — Premium Shopify Theme Development",
          frontmatter: {
            slug: "utopia-streetwear",
            summary: "Rebuilt and optimized the Shopify Online Store 2.0 storefront for Utopia Streetwear. Translated bold modern streetwear Figma layouts into custom Liquid sections, implemented advanced collection filtering, and created smooth micro-interactions that elevated brand identity and engagement.",
            image: "/utopia-streetwear.png",
            techStack: "Shopify (Liquid), Javascript, Vanilla CSS",
            date: "2025-11-20",
            deployLink: "https://utopiashop.ca/"
          }
        }
      },
      {
        post: {
          title: "Kirei Homeware — Custom Japanese Homeware Shopify Store",
          frontmatter: {
            slug: "kieri-homeware",
            summary: "Rebuilt and launched a custom Shopify Online Store 2.0 storefront for Kirei Homeware. Replaced bulky, slow third-party apps with native Liquid, AJAX, and custom metafields/metaobjects, lowering page-load times, improving Core Web Vitals, and removing monthly subscription overhead.",
            image: "/kieri-homeware.png",
            techStack: "Shopify (Liquid), AJAX Cart API, Vanilla CSS",
            date: "2025-02-15",
            deployLink: "https://kireihomeware.com.au/"
          }
        }
      },

    ]
  }

  return {
    props: {
      projects: (projects.edges || [])
        .sort(
          (a, b) =>
            Date.parse(b.post.frontmatter.date) -
            Date.parse(a.post.frontmatter.date),
        )
        .map((e) => e.post),
    },
  }
}
