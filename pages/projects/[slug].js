import {
  Box,
  Divider,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import ReactGA from 'react-ga4'

import { useRouter } from 'next/router'
import Container from '../../components/Container'
import ProjectContainer from '../../components/ProjectContainer'

import { FaGithub, FaLink, FaUser } from 'react-icons/fa'
import Image from 'next/image'

export default function Project({ project }) {
  const [views, setViews] = useState('...')

  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin
    fetch(`${baseUrl}/api/views/${slug}`)
      .then((res) => res.json())
      .then((json) => setViews(json.views))
      .catch((error) => {
        console.warn('Failed to fetch views:', error.message)
        setViews(0)
      })
  }, [slug])

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  if (!project) {
    return (
      <Container>
        <Stack>
          <Heading color="displayColor">Project not found</Heading>
        </Stack>
      </Container>
    )
  }

  return (
    <>
      <Container>
        <Stack>
          <Stack
            mx="auto"
            mt="73px"
            border="1px"
            borderColor={{ base: '#333', md: 'borderColor' }}
            borderRadius="10px"
          >
            <Image
              width={1366}
              height={768}
              objectFit="cover"
              style={{
                borderRadius: '10px',
              }}
              alt={project.title}
              priority
              src={project.frontmatter.image}
              blurDataURL={project.frontmatter.image}
            />
          </Stack>

          <Stack pt={4}>
            <Heading
              as="h1"
              color="displayColor"
              fontSize={['3xl', '3xl', '5xl', '5xl']}
            >
              {project.title}
            </Heading>
            <Text color="textPrimary" fontSize={['xs', 'xs', 'sm', 'sm']}>
              {project.frontmatter.summary}
            </Text>
            <HStack spacing={2}>
              <Text color="textPrimary" fontSize={['xs', 'xs', 'sm', 'sm']}>
                {views} views
              </Text>
              {project.frontmatter.githubLink && (
                <>
                  <Text>-</Text>
                  <HStack alignItems="center">
                    <FaGithub fontSize="20px" />
                    <Link
                      fontSize={['xs', 'xs', 'sm', 'sm']}
                      href={project.frontmatter.githubLink}
                      isExternal
                      onClick={() => handleClick(`${project.title}_github`)}
                    >
                      Github
                    </Link>
                  </HStack>
                </>
              )}

              {project.frontmatter.deployLink && (
                <>
                  <Text>-</Text>
                  <HStack>
                    <FaLink fontSize="18px" />
                    <Link
                      fontSize={['xs', 'xs', 'sm', 'sm']}
                      href={project.frontmatter.deployLink}
                      isExternal
                      onClick={() => handleClick(`${project.title}_livesite`)}
                    >
                      Live Site
                    </Link>
                  </HStack>
                </>
              )}
            </HStack>
            <HStack>
              <FaUser fill="#D1D5DB" fontSize="14px" />
              <Text color="#D1D5DB" fontSize={['xs', 'xs', 'sm', 'sm']}>
                {project.frontmatter.techStack}
              </Text>
            </HStack>
          </Stack>

          <Divider h="0.5px" my={4} bg="textSecondary" />
        </Stack>

        <Stack w="100%" pt="23px">
          <ProjectContainer>
            <Text color="textPrimary" fontSize="md" lineHeight="1.8">
              {project.body}
            </Text>
          </ProjectContainer>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  // Sample project paths
  const projects = [
    { slug: "bilal-marth" },
    { slug: "hands-down-coffee" },
    { slug: "utopia-streetwear" },
    { slug: "kieri-homeware" },
    { slug: "amz-vision" },
    { slug: "helion" },
    { slug: "tumie" },
    { slug: "music-player" },
    { slug: "maher-digital-services" },
    { slug: "neodrift-3d" }
  ]

  return {
    paths: projects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Sample project data
  const projectsData = {
    "bilal-marth": {
      title: "Bilal Marth (BM7) — Custom Store Redesign",
      body: "For the prominent lifestyle and apparel brand BM7 by creator Bilal Marth, I developed a custom Shopify storefront redesign. The project focused on translating high-end, luxurious brand aesthetics into a high-performance e-commerce architecture. A key technical achievement was engineering a fully custom, zero-app AJAX gift-box builder within the cart drawer. This allowed customers to dynamically build custom packages with real-time price calculations, item counts, and automated discount applying, entirely bypassing third-party app subscriptions and ensuring lightning-fast load speeds.",
      frontmatter: {
        slug: "bilal-marth",
        summary: "Developed a custom Shopify storefront redesign for prominent creator Bilal Marth, aligning styling, layout, and color schemas with the brand's luxurious identity. Engineered an interactive, zero-app AJAX gift-box builder within the cart drawer, handling multiple product additions, removals, and price calculations dynamically.",
        image: "/Bilal-marth.png",
        techStack: "Shopify (Liquid), AJAX Cart API, Javascript, CSS",
        date: "2026-05-10",
        deployLink: "https://bilalmarth7.pk"
      }
    },
    "hands-down-coffee": {
      title: "Hands Down Coffee — Shopify Store (Khaby Lame Brand)",
      body: "Hands Down Coffee is a global, high-traffic coffee brand co-founded by international creator Khaby Lame. I engineered the fully bespoke Shopify 2.0 storefront from the ground up, designed to withstand massive global traffic spikes from social media launches. I built high-fidelity custom GreenSock (GSAP) animations for product discovery, integrated custom liquid layouts for variant selectors, and optimized images and scripts to deliver a premium, conversion-focused storefront. The results was an immersive, ultra-responsive storefront that perfectly showcases their signature Discovery Box.",
      frontmatter: {
        slug: "hands-down-coffee",
        summary: "Engineered a fully bespoke Shopify 2.0 storefront from the ground up, designed to easily handle global viral traffic spikes from creator Khaby Lame. Crafted high-fidelity custom GSAP scroll-triggered animations and modular UI grids to deliver a premium, conversion-optimized storefront.",
        image: "/hands-down-coffee.png",
        techStack: "Shopify (Liquid), GSAP, Javascript, CSS",
        date: "2026-04-15",
        deployLink: "https://handsdowncoffee.com/"
      }
    },
    "utopia-streetwear": {
      title: "Utopia Streetwear — Premium Shopify Theme Development",
      body: "Utopia Streetwear is a modern, high-impact fashion and apparel brand. I rebuilt and optimized their Shopify Online Store 2.0 storefront, focusing on a mobile-first, conversion-ready UI. By translating bold, experimental streetwear layouts from Figma designs into custom Liquid and performance-optimized CSS, I achieved a visually stunning brand experience. I implemented advanced collection filtering, customized image galleries, and smooth scroll transitions that significantly increased user session times and customer retention.",
      frontmatter: {
        slug: "utopia-streetwear",
        summary: "Rebuilt and optimized the Shopify Online Store 2.0 storefront for Utopia Streetwear. Translated bold modern streetwear Figma layouts into custom Liquid sections, implemented advanced collection filtering, and created smooth micro-interactions that elevated brand identity and engagement.",
        image: "/utopia-streetwear.png",
        techStack: "Shopify (Liquid), Javascript, Vanilla CSS",
        date: "2025-11-20",
        deployLink: "https://utopiashop.ca/"
      }
    },
    "kieri-homeware": {
      title: "Kirei Homeware — Custom Japanese Homeware Shopify Store",
      body: "Kirei Homeware is an Australian online brand specializing in premium, handcrafted Japanese homeware and ceramics. I completely rebuilt and launched their custom Online Store 2.0 storefront to optimize conversions and performance. By replacing multiple slow third-party Shopify apps with native Liquid components, custom AJAX workflows, and flexible metafields/metaobjects, I decreased overall page load times and eliminated recurring app subscription fees. I also implemented A/B tested checkout optimization, boosting the mobile conversion readiness of the store.",
      frontmatter: {
        slug: "kieri-homeware",
        summary: "Rebuilt and launched a custom Shopify Online Store 2.0 storefront for Kirei Homeware. Replaced bulky, slow third-party apps with native Liquid, AJAX, and custom metafields/metaobjects, lowering page-load times, improving Core Web Vitals, and removing monthly subscription overhead.",
        image: "/kieri-homeware.png",
        techStack: "Shopify (Liquid), AJAX Cart API, Vanilla CSS",
        date: "2025-02-15",
        deployLink: "https://kireihomeware.com.au/"
      }
    },
    "amz-vision": {
      title: "Amz vision",
      body: "AmzVision is a creative studio and in-house agency specializing in elevating Amazon product listings through high-impact visuals and strategic content. This project showcases modern web development techniques with smooth animations and responsive design.",
      frontmatter: {
        slug: "amz-vision",
        summary: "AmzVision is a creative studio and in-house agency specializing in elevating Amazon product listings through high-impact visuals and strategic content.",
        image: "/amz-vision.png",
        techStack: "Javascript, Bootstrap, GSAP",
        date: "2024-03-15",
        deployLink: "https://amzvision.de/"
      }
    },
    "helion": {
      title: "Helion",
      body: "A modern and clean website for a fictional tech company, built with a focus on animations and user experience. Features include smooth scrolling, interactive elements, and a responsive design that works across all devices.",
      frontmatter: {
        slug: "helion",
        summary: "A modern and clean website for a fictional tech company, built with a focus on animations and user experience.",
        image: "/helion.png",
        techStack: "Javascript, Tailwind, HTML",
        date: "2024-02-20",
        deployLink: "https://nextgencodde.github.io/helion/"
      }
    },
    "tumie": {
      title: "Tumie",
      body: "A stylish and responsive website for a fictional fashion brand, showcasing products and collections. The design emphasizes visual appeal with modern typography and smooth transitions.",
      frontmatter: {
        slug: "tumie",
        summary: "A stylish and responsive website for a fictional fashion brand, showcasing products and collections.",
        image: "/tumie.png",
        techStack: "HTML, Bootstrap, Javascript",
        date: "2024-01-10",
        deployLink: "https://nextgencodde.github.io/Tumie-Website/"
      }
    },
    "music-player": {
      title: "Music Player",
      body: "A simple and elegant music player interface built with a focus on clean design and usability. Features include play/pause controls, progress tracking, and a responsive layout.",
      frontmatter: {
        slug: "music-player",
        summary: "A simple and elegant music player interface built with a focus on clean design and usability.",
        image: "/music-player.png",
        techStack: "Bootstrap, Javascript",
        date: "2023-12-28",
        deployLink: "https://nextgencodde.github.io/music_player/music.html"
      }
    },
    "maher-digital-services": {
      title: "Maher Digital Services",
      body: "Service-based agency website for digital tools, hosting, SEO, and web services. The site provides comprehensive information about various digital services offered.",
      frontmatter: {
        slug: "maher-digital-services",
        summary: "Service-based agency website for digital tools, hosting, SEO, and web services.",
        image: "/maher-digital-service.png",
        techStack: "Html, CSS, Javascript",
        date: "2023-12-28",
        deployLink: "https://maherdigital.site/"
      }
    },
    "neodrift-3d": {
      title: "NeoDrift 3D",
      body: "3D template using Spline or three.js with cool Effects and Animations. This project demonstrates advanced 3D web technologies and interactive experiences.",
      frontmatter: {
        slug: "neodrift-3d",
        summary: "3D template using Spline or three.js with cool Effects and Animations.",
        image: "/neodrift.png",
        techStack: "Html, CSS, Three.js, Spline",
        date: "2023-12-28",
        deployLink: "https://nextgencodde.github.io/neodrift/"
      }
    }
  }

  const project = projectsData[params.slug]

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
  }
} 