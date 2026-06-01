import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
// import LatestArticle from '../components/LatestArticle'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

export default function Index({ introduction, projects, contactMe }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Faizan Khalid - Frontend Engineer</title>
          <meta content="Faizan Khalid - Frontend Engineer" name="title" />
          <meta content="Fazi, Fazi website" name="keywords" />
          <meta
            content="Passionate frontend developer based in Pakistan, crafting digital experiences with modern web technologies"
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="faizankhalid.vercel.app" property="og:url" />
          <meta
            content="Faizan Khalid - Frontend Developer"
            property="og:title"
          />
          <meta
            content="Passionate frontend developer based in Pakistan, crafting digital experiences with modern web technologies"
            property="og:description"
          />
        
        </Head>

        <Stack
          as="main"
          alignItems="flex-start"
          justifyContent="center"
          mt={{ base: '15vh', md: '20vh' }}
          pb="144px"
          spacing={{ base: '100px', md: '144px' }}
        >
          <Introduction introduction={introduction} />
          <AboutMe />
          <FeaturedProjects projects={projects} />
          {/* <LatestArticle articles={articles} /> */}
          <ContactMe contactMe={contactMe} />
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  let data = { items: [] }
  let data3 = { items: [] }
  let data4 = { items: [] }
  let data2 = { edges: [] }

  // Only try Contentful if environment variables are available
  if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
    try {
      const client = require('contentful').createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      })

      try {
        data = await client.getEntries({
          content_type: 'featuredProjects',
          order: 'fields.order',
        })
      } catch (error) {
        console.warn('Failed to fetch featured projects:', error.message)
      }

      try {
        data3 = await client.getEntries({
          content_type: 'introduction',
          limit: 2,
          order: 'sys.createdAt',
        })
      } catch (error) {
        console.warn('Failed to fetch introduction:', error.message)
      }

      try {
        data4 = await client.getEntries({
          content_type: 'contactMe',
          limit: 1,
          order: 'sys.createdAt',
        })
      } catch (error) {
        console.warn('Failed to fetch contact info:', error.message)
      }
    } catch (error) {
      console.warn('Failed to create Contentful client:', error.message)
    }
  } else {
    console.warn('Contentful environment variables not found, using sample data')
    // Sample introduction data when Contentful is not available
    data3 = {
      items: [
        {
          fields: {
            emoji: "👋",
            description: "Based in Pakistan — I design & code production Websites."
          }
        },
        {
          fields: {
            emoji: "💼",
            description: "Freelance Developer — Open to remote & full-time",
            company: "Developer Roles.",
            companyUrl: null
          }
        }
      ]
    }
    data4 = {
      items: [
        {
          fields: {
            title: "Let's work together!",
            highlightText: "I'm always open to discussing new opportunities",
            description: "Whether you have a question or just want to say hi, feel free to reach out."
          }
        }
      ]
    }
    
    // Sample featured projects data for homepage
    data = {
      items: [
        {
          fields: {
            title: "Bilal Marth (BM7) — Custom Store Redesign & AJAX Builder",
            slug: "bilal-marth",
            description: "Developed a custom Shopify storefront redesign for prominent creator Bilal Marth, aligning styling, layout, and color schemas with the brand's luxurious identity. Engineered an interactive, zero-app AJAX gift-box builder within the cart drawer, handling multiple product additions, removals, and price calculations dynamically.",
            imageUrl: "/Bilal-marth.png",
            tags: ["Shopify (Liquid)", "AJAX Cart API", "Javascript"],
            order: 1,
            deployLink: "https://bilalmarth7.pk"
          }
        },
        {
          fields: {
            title: "Hands Down Coffee — Shopify Store (Khaby Lame Brand)",
            slug: "hands-down-coffee",
            description: "Engineered a fully bespoke Shopify 2.0 storefront from the ground up, designed to easily handle global viral traffic spikes from creator Khaby Lame. Crafted high-fidelity custom GSAP scroll-triggered animations and modular UI grids to deliver a premium, conversion-optimized storefront.",
            imageUrl: "/hands-down-coffee.png",
            tags: ["Shopify (Liquid)", "GSAP", "Javascript"],
            order: 2,
            deployLink: "https://handsdowncoffee.com/"
          }
        },
        {
          fields: {
            title: "Utopia Streetwear — Premium Shopify Theme Development",
            slug: "utopia-streetwear",
            description: "Rebuilt and optimized the Shopify Online Store 2.0 storefront for Utopia Streetwear. Translated bold modern streetwear Figma layouts into custom Liquid sections, implemented advanced collection filtering, and created smooth micro-interactions that elevated brand identity and engagement.",
            imageUrl: "/utopia-streetwear.png",
            tags: ["Shopify (Liquid)", "Javascript", "Vanilla CSS"],
            order: 3,
            deployLink: "https://utopiashop.ca/"
          }
        },
        {
          fields: {
            title: "Kirei Homeware — Custom Japanese Homeware Shopify Store",
            slug: "kieri-homeware",
            description: "Rebuilt and launched a custom Shopify Online Store 2.0 storefront for Kirei Homeware. Replaced bulky, slow third-party apps with native Liquid, AJAX, and custom metafields/metaobjects, lowering page-load times, improving Core Web Vitals, and removing monthly subscription overhead.",
            imageUrl: "/kieri-homeware.png",
            tags: ["Shopify (Liquid)", "AJAX Cart API", "Vanilla CSS"],
            order: 4,
            deployLink: "https://kireihomeware.com.au/"
          }
        }
      ]
    }
    
  }

  return {
    props: {
      projects: data.items || [],
      introduction: data3.items || [],
      contactMe: data4.items || [],
    },
  }
}
